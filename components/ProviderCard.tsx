import LocationCityIcon from '@mui/icons-material/LocationCity';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import React from 'react';
import { providers } from '../utils/enum';

interface PropsType {
    region: string;
}
const ProviderCard = (props: PropsType) => {
    const { region } = props;
    return (
        <div className='providerCard'>
            <div className='card'>
                <h2>
                    <LocationCityIcon />
                    {`${providers[region].name} - (${region})`}
                </h2>
                <h2>
                    <PhoneInTalkIcon /> {providers[region].phone}
                </h2>
            </div>
        </div>
    );
};

export default ProviderCard;
