import React, { useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { regions } from '../../utils/enum';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const UIAutoComplete = () => {
    const [city, setCity] = useState('');
    const onChange = (e) => {
        const { value } = e.target;
        setCity(value);
    };
    const router = useRouter();
    const lowerCaseRegions = regions.map((region) => region.toLowerCase());
    const onSubmit = () => {
        if (lowerCaseRegions.includes(city.toLowerCase())) return router.push(city.toLowerCase());
        return toast.error('mauvaise région');
    };

    console.log(city);

    return (
        <div className='uiAutoComplete'>
            <Autocomplete
                sx={{ width: 300 }}
                disableClearable
                freeSolo
                options={regions.map((option) => option)}
                renderInput={(params) => (
                    <TextField
                        onChange={onChange}
                        onSelect={onChange}
                        name='city'
                        {...params}
                        label='Région'
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
