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
    },
    cardsContainer: {
        gridGap: '1.5rem 0',
        gridTemplateColumns: '100%',
        gridTemplateRows: 'auto',
        [theme.breakpoints.up('sm')]: {
            gridGap: '1.5rem 2%',
            gridTemplateColumns: '49% 49%',
            gridTemplateRows: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: '31% 31% 31%',
            gridTemplateRows: 'auto',
        }
    },
    cardImage: {
        height: 230
    }
}))