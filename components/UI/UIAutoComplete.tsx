import React, { useCallback, useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { debounce } from 'lodash';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const UIAutoComplete = () => {
    const [city, setCity] = useState('');
    const [options, setOptions] = useState<string[]>([]);
    const router = useRouter();

    const deb = useCallback(
        debounce((e) => {
            setCity(e.target.value);
        }, 100),
        [city]
    );

    const onChange = (e) => {
        deb(e);
    };

    useEffect(() => {
        const searchRegions = async () => {
            if (city?.trim() === '') return setOptions([]);

            const res = await axios.get(
                `https://data.opendatasoft.com/api/records/1.0/search/?dataset=geonames-postal-code%40public&q=${city}&rows=50&facet=country_code`
            );

            setOptions([]);
            for (const record of res.data.records) {
                const { postal_code, place_name } = record.fields;
                setOptions((prevOptions) => [...prevOptions, `${postal_code} (${place_name})`]);
            }
        };
        searchRegions();
    }, [city]);

    const onSubmit = () => {
        if (options.includes(city)) return router.push(city);
        return toast.error('mauvaise départements');
    };

    return (
        <div className='uiAutoComplete'>
            <Autocomplete
                sx={{ width: 300 }}
                disableClearable
                freeSolo
                options={options.map((option) => option)}
                renderInput={(params) => (
                    <TextField
                        onChange={onChange}
                        onSelect={onChange}
                        name='city'
                        {...params}
                        label='Départements'
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
            <button onClick={onSubmit} className='button'>
                Vérifier si disponible
            </button>
        </div>
    );
};

export default UIAutoComplete;
