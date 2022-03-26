import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { departmentsList, endpoints } from '../../utils/enum';

import axios from 'axios';

interface initialState {
    isRegionExist: boolean;
    citiesInDepartment: string[];
}
const initialState = { isRegionExist: false, citiesInDepartment: [] };

export const autoCompleteSearchAction = createAsyncThunk<
    {},
    {
        city: string;
        setOptions: any;
    }
>('autoCompleteSearchAction', async ({ city, setOptions }, { rejectWithValue }) => {
    try {
        if (city?.trim() === '') return setOptions([]);
        const res = await axios.get(endpoints(city, 50).fetchCities);
        setOptions([]);
        for (const record of res.data.records) {
            let { postal_code, place_name } = record.fields;
            postal_code = postal_code.replace('" ".*', '');
            if (postal_code.length !== 5) continue;
            setOptions((prevOptions: any) => [...prevOptions, `${postal_code} (${place_name})`]);
        }
        return res;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const isRegionExistAction = createAsyncThunk<
    {},
    {
        region: string;
    }
>('isRegionExistAction', async ({ region }, { rejectWithValue }) => {
    try {
        const res = await axios.get(endpoints(region, 1).fetchCities);
        const options = [];
        for (const record of res.data?.records) {
            const { postal_code, place_name } = record.fields;
            options.push(`${postal_code} (${place_name})`);
        }
        const isRegionExist = options.includes(region) || departmentsList.includes(region);
        return isRegionExist;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const citiesInDepartmentAction = createAsyncThunk<
    {},
    {
        region: string;
    }
>('citiesInDepartmentAction', async ({ region }, { rejectWithValue }) => {
    try {
        const options = [];
        region = region.slice(0, 2);
        const res = await axios.get(endpoints(region, 100).fetchCities);
        for (const record of res.data.records) {
            let { postal_code, place_name } = record.fields;
            postal_code = postal_code.replace('" ".*', '');
            if (postal_code.length !== 5) continue;
            options.push(`${postal_code} (${place_name})`);
        }
        options.sort();
        return options;
    } catch (err) {
        return rejectWithValue(err);
    }
});

export const regionSlice = createSlice({
    name: 'region',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase<any>(isRegionExistAction.fulfilled, (state, { payload }) => {
            state.isRegionExist = payload;
        });
        builder.addCase<any>(autoCompleteSearchAction.rejected, (state) => {
            state.isRegionExist = false;
        });
        builder.addCase<any>(citiesInDepartmentAction.fulfilled, (state, { payload }) => {
            state.citiesInDepartment = payload;
        });
    },
});

export default regionSlice.reducer;
