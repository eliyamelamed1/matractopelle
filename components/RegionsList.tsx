import * as React from 'react';

import Link from 'next/link';
import List from '@mui/material/List';

const RegionsList: React.FC<{ options: string[] }> = ({ options }) => {
    options = [...options, '/'];
    return (
        <div className='regionList'>
            <h1>certaines des régions avec lesquelles nous travaillons</h1>
            <List className='list'>
                {options.map((value) => (
                    <Link key={value} href={value}>
                        {value === '/' ? '' : `→ ${value}`}
                    </Link>
                ))}
            </List>
        </div>
    );
};
export default RegionsList;
