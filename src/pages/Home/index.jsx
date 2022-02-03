import { LOAD_ALL_COUNTRIES } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Card, CardContent, CardMedia, FormControl, InputAdornment, IconButton, InputLabel, MenuItem, 
    OutlinedInput, Paper, TextField, Typography } from '@mui/material'
import { useStyles } from './styles';
import React from 'react'

const Home = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const [ continent, setContinent ] = useState('africa');
    const [ countriesList, setContriesList ] = useState([]);
    const countriesListRef = useRef([]);
    const inputRef = useRef(null);

    const continents = useMemo(() => [
        {
          value: 'africa',
          label: 'Africa',
        },
        {
          value: 'america',
          label: 'America',
        },
        {
          value: 'asia',
          label: 'Asia',
        },
        {
          value: 'europe',
          label: 'Europe',
        },
        {
          value: 'oceania',
          label: 'Oceania',
        },
    ], []);

    const handleChange = useCallback(() => {}, [])//

    const inputChangeHandler = useCallback(event => {
        const value = event.target.value;
        if(!Boolean(value)) {
            setContriesList(countriesListRef.current)
        }
    }, []);

    const handleClick = useCallback(() => {//
        console.log(inputRef.current.value);
        const value = inputRef.current.value;
        if(Boolean(value)) {
            setContriesList(list => {
                const result = list.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
                if(result.length === 0)
                    return list;
                return result;
            })
        }
    }, [])//

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { data } = useQuery(LOAD_ALL_COUNTRIES);
    useEffect(() => {
        if(data) {
            console.log(data.countries)
            countriesListRef.current = data.countries;
            setContriesList(data.countries)
        }
    }, [ data ]);

    return (
        <main 
            className={classNames('py-8', globalStyles.px, globalStyles.main)}>
            <form
                className={classNames('sm:flex sm:justify-between md:items-center')}>
                <Paper 
                    component={FormControl}
                    classes={{ root: classNames(classes.inputContainer)}}
                    elevation={0}  
                    fullWidth 
                    variant="outlined">
                    <OutlinedInput
                        id="outlined-adornment-password"
                        placeholder='Search for a country'
                        className={classNames('border-0')}
                        inputRef={inputRef}
                        onChange={inputChangeHandler}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClick}
                            onMouseDown={handleMouseDownPassword}
                            edge="start"
                            >
                                <SearchOutlinedIcon />
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Search for a country"
                    />
                </Paper>
                <TextField
                    classes={{ root: classNames('bg-white mt-4 sm:mt-0', classes.select)}}
                    id="outlined-select-currency"
                    select
                    value={continent}
                    onChange={handleChange}
                    >
                    {continents.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </form>
            <div className={classNames('grid mt-12 md:justify-between', classes.cardsContainer)}>
                {
                    countriesList.map((item, index) => (
                        <Card 
                            component="article" 
                            elevation={0}
                            key={item.name + index}>
                            <CardMedia
                                alt="Paella dish"
                                component="img"
                                className={classNames(classes.cardImage)}
                                height="194"
                                image={ item.flagURL }
                            />
                            <CardContent>
                                <Typography 
                                    component="h2"
                                    className={classNames('font-bold')}
                                    variant="h5">
                                        { item.name }
                                </Typography>
                                <Typography 
                                    className={classNames('text-base mt-4')}
                                    component="p">
                                        <span className={classNames('font-bold')}></span>
                                </Typography>
                                <Typography 
                                    className={classNames('text-base mt-1.5 capitalize')}
                                    component="p">
                                        <span className={classNames('font-bold')}>Region: </span>
                                        { item.region}
                                </Typography>
                                <Typography 
                                    className={classNames('text-base mt-1.5')}
                                    component="p">
                                        <span className={classNames('font-bold')}>Capital: </span>
                                        { item.capitalCities ? item.capitalCities[0] : '' }
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </main>
    )
};

export default Home;