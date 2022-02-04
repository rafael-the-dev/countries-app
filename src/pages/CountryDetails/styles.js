import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
    imageContainer: {
        [theme.breakpoints.up('md')]: {
            height: 400,
            width: 400
        }
    }
}))