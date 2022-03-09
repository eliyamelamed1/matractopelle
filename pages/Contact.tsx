import { Button, FormControl, TextField } from '@mui/material';

import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const currencies = [
    {
        value: 'Minipelle',
        label: 'Minipelle',
    },
    {
        value: 'Pelle',
        label: 'Pelle',
    },
    {
        value: 'Tractopelle',
        label: 'Tractopelle',
    },
];

const Contact = () => {
    return (
        <div className='contact'>
            <FormControl className='form'>
                <h1>Obtenez un devis</h1>
                <h5>PARLEZ-NOUS DE VOS BESOINS, RÉPONSE IMMÉDIATE</h5>
                <TextField
                    id='Nom/Prénom'
                    label='Nom/Prénom'
                    required
                    className='input'
                    variant='standard'
                    size='small'
                />
                <TextField id='Email' label='Email' required className='input' variant='standard' size='small' />
                <TextField
                    id='Code postal'
                    label='Code postal'
                    required
                    className='input'
                    variant='standard'
                    size='small'
                />
                <TextField
                    id='Téléphone'
                    label='Téléphone'
                    required
                    className='input'
                    variant='standard'
                    size='small'
                />
                <TextField
                    id='Votre ville'
                    label='Votre ville'
                    required
                    className='input'
                    variant='standard'
                    size='small'
                />
                <TextField
                    id='standard-select-currency'
                    select
                    label='Type de grue souhaité'
                    helperText=''
                    variant='standard'
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField id='Message' label='Message' variant='standard' multiline size='small' />
                <button>Envoyer</button>
            </FormControl>
        </div>
    );
};

export default Contact;
