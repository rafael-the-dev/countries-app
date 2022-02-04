import { LOAD_COUNTRY_DETAILS } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import { useStyles } from './styles';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useParams } from 'react-router-dom'
import { Button, Paper, Typography } from '@mui/material'

const CountryDetails = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    const [ country, setCountry ] = useState({});

    const { id } = useParams();

    const [ getData, { data }] = useLazyQuery(LOAD_COUNTRY_DETAILS, {
        variables: {
            cca3: id.toUpperCase()
        }
    });

    useEffect(() => {
        if(id) {
            getData();
        }
    }, [ getData, id ])

    useEffect(() => {
        console.log(data);
        if(data) {
            setCountry(data.country)
        }
    }, [ data ])

    return (
        <main
            className={classNames('py-8 dark:bg-slate-900', globalStyles.px, globalStyles.main)}>
            <div>
                <Link to="/">
                    <Button
                        startIcon={<ArrowBackOutlinedIcon />}
                        className={classNames('text-black dark:bg-slate-800 dark:text-slate-200')}>
                        Back
                    </Button>
                </Link>
            </div>
            { data ? <section className={classNames('mt-8 md:flex md:items-center md:justify-center')}>
                <div className={classNames('', classes.imageContainer)}>
                    <img 
                        alt=""
                        className={classNames('block w-full h-full')}
                        src={country.flagURL}
                    />
                </div>
                <div className={classNames('mt-8 md:mt-0 md:ml-28')}>
                    <Typography 
                        component="h2"
                        className={classNames('font-bold dark:text-slate-100')}
                        variant="h5">
                            { country.name }
                    </Typography>
                    <div className={classNames('mt-6')}>
                        <div>
                            <Typography 
                                className={classNames('text-base dark:text-slate-200')}
                                component="p">
                                    <span className={classNames('font-bold dark:text-slate-100')}>Region: </span>
                                    { country.region}
                            </Typography>
                            <Typography 
                                className={classNames('text-base dark:text-slate-200 mt-1.5')}
                                component="p">
                                <span className={classNames('font-bold dark:text-slate-100 capitalize')}>Sub region: </span>
                                { country.subregion }
                            </Typography>
                            <Typography 
                                className={classNames('text-base dark:text-slate-200 mt-1.5')}
                                component="p">
                                <span className={classNames('font-bold dark:text-slate-100')}>Capital: </span>
                                { country.capitalCities ? country.capitalCities[0] : ''}
                            </Typography> 
                            <Typography 
                                className={classNames('text-base dark:text-slate-200 mt-1.5')}
                                component="p">
                                <span className={classNames('font-bold dark:text-slate-100')}>Currencies: </span>
                                { country.currencies ? country.currencies.map(item => item.name).join(', ') : ''}
                            </Typography>
                            <Typography 
                                className={classNames('text-base dark:text-slate-200 mt-1.5')}
                                component="p">
                                <span className={classNames('font-bold dark:text-slate-100')}>Languages: </span>
                                { country.languages ? country.languages.map(item => item.name).join(', ') : ''}
                            </Typography>    
                        </div>
                        <div className={classNames('mt-4')}>
                            <Typography 
                                className={classNames('text-base dark:text-slate-200 mt-1.5 font-bold')}
                                component="p">
                                Borders
                            </Typography>   
                            <ul id="borders" className={classNames('mt-3 flex items-center flex-wrap')}>
                                {
                                    country.borders && country.borders.map((item, index) => (
                                        <Paper 
                                            component='li' 
                                            elevation={0}
                                            className={classNames('px-4 py-2 mb-3 mr-3 dark:bg-slate-800 dark:text-slate-200')}
                                            key={index}>
                                            { item.name }
                                        </Paper>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section> : (
                <Typography 
                    component="h2"
                    className={classNames('text-center dark:text-slate-200 mt-24 font-bold')}
                    variant="h3">
                        Loading...
                </Typography>
            )}
        </main>
    )
};

export default CountryDetails;