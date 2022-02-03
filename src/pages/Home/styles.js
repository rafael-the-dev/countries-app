import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
    inputContainer: {
        [theme.breakpoints.up('sm')]: {
            width: 300
        },
        [theme.breakpoints.up(750)]: {
            width: 350
        },
        [theme.breakpoints.up('md')]: {
            width: 450
        }
    },
    select: {
        width: 200
    }
}))