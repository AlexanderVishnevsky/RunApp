import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    layout: {
        width: '503px',
        height: '379px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#e990f9',
        borderRadius: '44px',
    },
    authButton: {
        width: '151px',
        height: '60px',
        borderRadius: '36px',
        border: 'solid 3px #ffffff',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
    },
});
