import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
    },
    layout: {
        width: '33%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: theme.palette.secondary.main,
        borderRadius: '44px',
    },
    layoutWithoutBackground: {
        width: '33%',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
    },
    authButton: {
        width: '151px',
        height: '60px',
        borderRadius: '36px',
        border: 'solid 3px #ffffff',
        backgroundColor: 'transparent',
        color: '#FFFFFF',
    },
}));
