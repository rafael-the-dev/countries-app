import { Button, Paper, Typography } from '@mui/material'
import classNames from 'classnames'
import { useGlobalStyles } from '../../styles'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Header = () => {
    const globalStyles = useGlobalStyles();

    return (
        <Paper 
            className={classNames('flex items-center justify-between py-4', globalStyles.px)}
            component="header"
            elevation={0}>
            <Typography
                component="h1"
                className={classNames('font-bold')}
                variant="h6">
                Where in the world?
            </Typography>
            <Button
                className={classNames('capitalize text-black')}
                startIcon={<DarkModeOutlinedIcon />}>
                Dark mode
            </Button>
        </Paper>
    );
};

export default Header;