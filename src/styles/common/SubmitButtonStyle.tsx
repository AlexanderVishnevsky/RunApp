import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    authButton: {
        minHeight: '40pt',
        maxHeight: '60pt',
        borderRadius: '36px',
        border: 'solid 3px #ffffff',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
    },

    preloader: {
        color: '#FFFFFF',
        // width: '60px',
        // height: '60px',
        // borderRadius: '36px',
    },

    authButtonLoading: {
        width: '1px',
        borderRadius: '36px',
        border: '3px solid transparent',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        animation: '$move 0.5s linear',
        '&:disabled': {
            border: '3px solid rgba(0, 0, 0, 0.26)',
        },
    },
    '@keyframes move': {
        '0%': {
            width: '150px',
            border: '3px solid #FFFFFF',
        },
        '90%': {
            width: '1px',
            border: '3px solid transparent',
        },
        '100%': {
            width: '1px',
            border: '3px solid transparent',
        },
    },
});
