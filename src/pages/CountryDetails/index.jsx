import { LOAD_COUNTRY_DETAILS } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import { useStyles } from './styles';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useParams } from 'react-router-dom'
import { Button, Typography } from '@mui/material'

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
            className={classNames('py-8', globalStyles.px, globalStyles.main)}>
            <div>
                <Link to="/">
                    <Button
                        startIcon={<ArrowBackOutlinedIcon />}
                        className={classNames('text-black')}>
                        Back
                    </Button>
                </Link>
            </div>
            <section className={classNames('mt-8 md:flex md:items-center md:justify-center')}>
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
                        className={classNames('font-bold')}
                        variant="h5">
                            { country.name }
                    </Typography>
                    <div className={classNames('mt-6')}>
                        <div>
                            <Typography 
                                className={classNames('text-base')}
                                component="p">
                                    <span className={classNames('font-bold')}>Region: </span>
                                    { country.region}
                            </Typography>
                            <Typography 
                                className={classNames('text-base mt-1.5')}
                                component="p">
                                <span className={classNames('font-bold capitalize')}>Sub region: </span>
                                { country.subregion }
                            </Typography>
                            <Typography 
                                className={classNames('text-base mt-1.5')}
                                component="p">
                                <span className={classNames('font-bold')}>Capital: </span>
                                { country.capitalCities ? country.capitalCities[0] : ''}
                            </Typography> 
                            <Typography 
                                className={classNames('text-base mt-1.5')}
                                component="p">
                                <span className={classNames('font-bold')}>Currencies: </span>
                                { country.currencies ? country.currencies.map(item => item.name).join(', ') : ''}
                            </Typography>
                            <Typography 
                                className={classNames('text-base mt-1.5')}
                                component="p">
                                <span className={classNames('font-bold')}>Languages: </span>
                                { country.languages ? country.languages.map(item => item.name).join(', ') : ''}
                            </Typography>    
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default CountryDetails;