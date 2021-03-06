import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    layout: {
        width: '100%',
        height: '100%',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    fab: {
        border: '5px solid',
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'transparent',
            borderColor: theme.palette.primary.main,
        },
        '&:active': {
            backgroundColor: 'transparent',
            borderColor: theme.palette.primary.main,
            boxShadow: 'none',
        },
    },
    plus: {
        fontSize: '46px',
    },
}));
