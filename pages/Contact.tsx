import { Button, FormControl, TextField } from '@mui/material';
import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';

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

interface FormDataType {
    name: string;
    zipCode: string;
    phone: string;
    city: string;
    item: string;
    massage: string;
    email: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormDataType>({
        name: '',
        zipCode: '',
        phone: '',
        city: '',
        item: '',
        massage: '',
        email: '',
    });

    const { name, zipCode, email, phone, city, item, massage } = formData;

    const onChange = (e) => setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    const onSubmit = (e) => {
        e.preventDefault();
        // call send email api
        console.log('asdasd');
    };

    return (
        <div className='contact'>
            <FormControl className='form' onSubmit={onSubmit}>
                <h1>Obtenez un devis</h1>
                <h5>PARLEZ-NOUS DE VOS BESOINS, RÉPONSE IMMÉDIATE</h5>
                <TextField
                    label='Nom/Prénom'
                    name='name'
                    onChange={onChange}
                    className='input'
                    variant='standard'
                    size='small'
                    required
                />
                <TextField
                    label='Email'
                    name='email'
                    onChange={onChange}
                    required
                    className='input'
                    variant='standard'
                    size='small'
                />
                <TextField
                    label='Code postal'
                    required
                    name='zipCode'
                    className='input'
                    variant='standard'
                    size='small'
                    onChange={onChange}
                />
                <TextField
                    label='Téléphone'
                    name='phone'
                    required
                    className='input'
                    variant='standard'
                    size='small'
                    onChange={onChange}
                />
                <TextField
                    label='Votre ville'
                    name='city'
                    required
                    className='input'
                    variant='standard'
                    size='small'
                    onChange={onChange}
                />
                <TextField
                    select
                    label='Type de grue souhaité'
                    helperText=''
                    variant='standard'
                    name='item'
                    onChange={onChange}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label='Message'
                    variant='standard'
                    multiline
                    size='small'
                    name='massage'
                    onChange={onChange}
                />
                <Button type='submit'>Envoyer</Button>
            </FormControl>
        </div>
    );
};

export default Contact;
