import { LOAD_ALL_COUNTRIES } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { useCallback, useEffect, useMemo, useState } from 'react'
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
    const handleClick = useCallback(() => {}, [])//

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { data } = useQuery(LOAD_ALL_COUNTRIES);
    useEffect(() => {
        if(data) {
            console.log(data.countries)
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
                    <InputLabel htmlFor="outlined-adornment-password">Search for a country</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        className={classNames('border-0')}
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
                    label="Filter by region"
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
                            key={index}>
                            <CardMedia
                                alt="Paella dish"
                                component="img"
                                className={classNames(classes.cardImage)}
                                height="194"
                                image="/static/images/cards/paella.jpg"
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
                                    className={classNames('text-base mt-1.5')}
                                    component="p">
                                        <span className={classNames('font-bold')}>Region: </span>
                                        { item.continent.name}
                                </Typography>
                                <Typography 
                                    className={classNames('text-base mt-1.5')}
                                    component="p">
                                        <span className={classNames('font-bold')}>Capital: </span>
                                        { item.capital}
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