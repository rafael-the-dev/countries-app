import { Button, Paper, Typography } from '@mui/material'
import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
//import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { AppContext } from '../../context/AppContext';
import { useContext } from 'react';

const Header = () => {
    const globalStyles = useGlobalStyles();

    const { theme, toggleTheme } = useContext(AppContext);
    console.log(Boolean(theme.isLightTheme))

    return (
        <Paper 
            className={classNames('flex items-center justify-between py-4 dark:bg-slate-800', globalStyles.px)}
            component="header"
            elevation={0}>
            <Typography
                component="h1"
                className={classNames('font-bold dark:text-white')}
                variant="h6">
                Where in the world?
            </Typography>
            <Button
                className={classNames('capitalize text-black dark:text-white')}
                onClick={() => toggleTheme()}
                startIcon={ Boolean(theme.isLightTheme) ? <DarkModeIcon /> : <LightModeIcon />}>
                { Boolean(theme.isLightTheme) ? 'Dark mode' : 'Light mode' }
            </Button>
        </Paper>
    );
};

export default Header;