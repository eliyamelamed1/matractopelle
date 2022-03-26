import React, { useCallback, useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import { CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import { autoCompleteSearchAction } from '../../redux/slices/regionSlice';
import { debounce } from 'lodash';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const UIAutoComplete = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const [options, setOptions] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const deb = useCallback(
        debounce((e) => {
            setCity(e.target.value);
        }, 300),
        [city]
    );

    const onChange = (e) => {
        deb(e);
    };

    useEffect(() => {
        const searchRegions = async () => {
            setLoading(true);
            await dispatch(autoCompleteSearchAction({ city, setOptions }));
            setLoading(false);
        };
        searchRegions();
    }, [city, dispatch]);

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
                options={options}
                loading={loading}
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
                            endAdornment: (
                                <React.Fragment>
                                    {loading && <CircularProgress color='inherit' size={20} />}
                                    {/* <button style={{ color: 'black' }}>button that will dispatch the action</button> */}
                                </React.Fragment>
                            ),
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
