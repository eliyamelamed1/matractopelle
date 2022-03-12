import { Button, TextField } from '@mui/material';
import React, { useRef } from 'react';

import MenuItem from '@mui/material/MenuItem';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const currencies = [
    {
        value: 'Minipelle',
    },
    {
        value: 'Pelle',
    },
    {
        value: 'Tractopelle',
    },
];

interface FormDataType {
    name: string;
    zipCode: string;
    phone: string;
    city: string;
    item: string;
    message: string;
    email: string;
}

const Contact = () => {
    const form = useRef();
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.sendForm('service_sknqxih', 'template_79ixiwh', form.current, 'JfIaPcyIDQHYxoOel');
            toast.success('courrier envoyé avec succès');
            form.current.reset();
        } catch (err) {
            toast.error('erreur - le mail a été envoyé');
        }
    };

    return (
        <div className='contact'>
            <form className='form' ref={form} onSubmit={onSubmit}>
                <h1>Obtenez un devis</h1>
                <h5>PARLEZ-NOUS DE VOS BESOINS, RÉPONSE IMMÉDIATE</h5>
                <TextField label='Nom/Prénom' name='name' className='input' variant='standard' size='small' required />
                <TextField label='E-mail' name='email' className='input' variant='standard' size='small' required />
                <TextField
                    label='Code postal'
                    name='zipCode'
                    className='input'
                    variant='standard'
                    size='small'
                    required
                />
                <TextField label='Téléphone' name='phone' className='input' variant='standard' size='small' required />
                <TextField label='Votre ville' name='city' className='input' variant='standard' size='small' required />
                <TextField
                    defaultValue=''
                    select
                    label='Type de tractopelle souhaité'
                    variant='standard'
                    name='item'
                    required
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField label='Un message' variant='standard' multiline size='small' name='message' />
                <Button type='submit'>Envoyer</Button>
            </form>
        </div>
    );
};

export default Contact;
