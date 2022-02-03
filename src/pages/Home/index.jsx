import { LOAD_ALL_COUNTRIES } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import { useCallback, useEffect } from 'react'
import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FormControl, InputAdornment, IconButton, InputLabel, OutlinedInput, Paper } from '@mui/material'

const Home = () => {
    const globalStyles = useGlobalStyles();

    const handleClick = useCallback(() => {}, [])

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { data } = useQuery(LOAD_ALL_COUNTRIES);
    useEffect(() => {
        console.log(data)
    }, [ data ]);

    return (
        <main 
            className={classNames('py-8', globalStyles.px, globalStyles.main)}>
            <Paper
                component="form"
                elevation={0}>
                <FormControl  
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
                </FormControl>
            </Paper>
        </main>
    )
};

export default Home;