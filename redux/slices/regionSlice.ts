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
            setOptions((prevOptions: any) => [...prevOptions, `${place_name} (${postal_code})`]);
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
        const record = res.data?.records[0];
        const { postal_code, place_name } = record.fields;
        const result = `${place_name} (${postal_code})`;

        const isRegionExist = region === result || departmentsList.includes(region);
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
        const startIndex = region.indexOf('(') + 1;
        region = region.slice(startIndex, startIndex + 2);

        const res = await axios.get(endpoints(region, 10000).fetchCitiesInDep);
        for (const record of res.data.records) {
            let { postal_code, place_name } = record.fields;
            postal_code = postal_code.replace('" ".*', '');
            if (postal_code.length !== 5) continue;
            options.push(`${place_name} (${postal_code})`);
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
