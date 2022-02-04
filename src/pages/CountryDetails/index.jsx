import { LOAD_ALL_COUNTRIES } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import { useStyles } from './styles';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const CountryDetails = () => {
    const classes = useStyles();
    const globalStyles = useGlobalStyles();

    return (
        <main
            className={classNames('py-8', globalStyles.px, globalStyles.main)}>
            <div>
                <Link to="/">
                    <Button
                        startIcon={<ArrowBackOutlinedIcon />}>
                        Back
                    </Button>
                </Link>
            </div>
        </main>
    )
};

export default CountryDetails;