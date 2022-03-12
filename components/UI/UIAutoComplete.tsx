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
    const onSubmit = () => {
        if (regions.includes(city)) return router.push(city);
        return toast.error('Wrong city');
    };

    return (
        <div className='uiAutoComplete'>
            <Autocomplete
                sx={{ width: 300 }}
                freeSolo
                disableClearable
                options={regions.map((option) => option)}
                onSelect={onChange}
                renderInput={(params) => (
                    <TextField
                        onChange={onChange}
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
