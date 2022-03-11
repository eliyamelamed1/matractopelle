import React, { useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', link: 1994 },
    { title: 'The Godfather', link: 1972 },
    { title: 'The Godfather: Part II', link: 1974 },
    { title: 'The Dark Knight', link: 2008 },
    { title: '12 Angry Men', link: 1957 },
    { title: "Schindler's List", link: 1993 },
    { title: 'Pulp Fiction', link: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        link: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', link: 1966 },
    { title: 'Fight Club', link: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        link: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        link: 1980,
    },
    { title: 'Forrest Gump', link: 1994 },
    { title: 'Inception', link: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        link: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", link: 1975 },
    { title: 'Goodfellas', link: 1990 },
    { title: 'The Matrix', link: 1999 },
    { title: 'Seven Samurai', link: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        link: 1977,
    },
    { title: 'City of God', link: 2002 },
    { title: 'Se7en', link: 1995 },
    { title: 'The Silence of the Lambs', link: 1991 },
    { title: "It's a Wonderful Life", link: 1946 },
    { title: 'Life Is Beautiful', link: 1997 },
    { title: 'The Usual Suspects', link: 1995 },
    { title: 'Léon: The Professional', link: 1994 },
    { title: 'Spirited Away', link: 2001 },
    { title: 'Saving Private Ryan', link: 1998 },
    { title: 'Once Upon a Time in the West', link: 1968 },
    { title: 'American History X', link: 1998 },
    { title: 'Interstellar', link: 2014 },
    { title: 'Casablanca', link: 1942 },
    { title: 'City Lights', link: 1931 },
    { title: 'Psycho', link: 1960 },
    { title: 'The Green Mile', link: 1999 },
    { title: 'The Intouchables', link: 2011 },
    { title: 'Modern Times', link: 1936 },
    { title: 'Raiders of the Lost Ark', link: 1981 },
    { title: 'Rear Window', link: 1954 },
    { title: 'The Pianist', link: 2002 },
    { title: 'The Departed', link: 2006 },
    { title: 'Terminator 2: Judgment Day', link: 1991 },
    { title: 'Back to the Future', link: 1985 },
    { title: 'Whiplash', link: 2014 },
    { title: 'Gladiator', link: 2000 },
    { title: 'Memento', link: 2000 },
    { title: 'The Prestige', link: 2006 },
    { title: 'The Lion King', link: 1994 },
    { title: 'Apocalypse Now', link: 1979 },
    { title: 'Alien', link: 1979 },
    { title: 'Sunset Boulevard', link: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        link: 1964,
    },
    { title: 'The Great Dictator', link: 1940 },
    { title: 'Cinema Paradiso', link: 1988 },
    { title: 'The Lives of Others', link: 2006 },
    { title: 'Grave of the Fireflies', link: 1988 },
    { title: 'Paths of Glory', link: 1957 },
    { title: 'Django Unchained', link: 2012 },
    { title: 'The Shining', link: 1980 },
    { title: 'WALL·E', link: 2008 },
    { title: 'American Beauty', link: 1999 },
    { title: 'The Dark Knight Rises', link: 2012 },
    { title: 'Princess Mononoke', link: 1997 },
    { title: 'Aliens', link: 1986 },
    { title: 'Oldboy', link: 2003 },
    { title: 'Once Upon a Time in America', link: 1984 },
    { title: 'Witness for the Prosecution', link: 1957 },
    { title: 'Das Boot', link: 1981 },
    { title: 'Citizen Kane', link: 1941 },
    { title: 'North by Northwest', link: 1959 },
    { title: 'Vertigo', link: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        link: 1983,
    },
    { title: 'Reservoir Dogs', link: 1992 },
    { title: 'Braveheart', link: 1995 },
    { title: 'M', link: 1931 },
    { title: 'Requiem for a Dream', link: 2000 },
    { title: 'Amélie', link: 2001 },
    { title: 'A Clockwork Orange', link: 1971 },
    { title: 'Like Stars on Earth', link: 2007 },
    { title: 'Taxi Driver', link: 1976 },
    { title: 'Lawrence of Arabia', link: 1962 },
    { title: 'Double Indemnity', link: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        link: 2004,
    },
    { title: 'Amadeus', link: 1984 },
    { title: 'To Kill a Mockingbird', link: 1962 },
    { title: 'Toy Story 3', link: 2010 },
    { title: 'Logan', link: 2017 },
    { title: 'Full Metal Jacket', link: 1987 },
    { title: 'Dangal', link: 2016 },
    { title: 'The Sting', link: 1973 },
    { title: '2001: A Space Odyssey', link: 1968 },
    { title: "Singin' in the Rain", link: 1952 },
    { title: 'Toy Story', link: 1995 },
    { title: 'Bicycle Thieves', link: 1948 },
    { title: 'The Kid', link: 1921 },
    { title: 'Inglourious Basterds', link: 2009 },
    { title: 'Snatch', link: 2000 },
    { title: '3 Idiots', link: 2009 },
    { title: 'Monty Python and the Holy Grail', link: 1975 },
];

interface citiesType {
    [key: string]: boolean;
}
const cities: citiesType = {
    'Django Unchained': true,
};

const UIAutoComplete = () => {
    const [city, setCity] = useState('');
    const onChange = (e) => {
        const { value } = e.target;
        setCity(value);
    };
    const router = useRouter();
    const onSubmit = () => {
        if (cities[city]) return router.push(city);
        return toast.error('Wrong city');
    };

    return (
        <div className='uiAutoComplete'>
            <Autocomplete
                sx={{ width: 300 }}
                freeSolo
                disableClearable
                options={top100Films.map((option) => option.title)}
                onSelect={onChange}
                renderInput={(params) => (
                    <TextField
                        onChange={onChange}
                        name='city'
                        {...params}
                        label='City'
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
            <button onClick={onSubmit} className='button'>
                Check If Available
            </button>
        </div>
    );
};

export default UIAutoComplete;
