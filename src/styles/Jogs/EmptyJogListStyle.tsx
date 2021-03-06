import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    emptyJogListLayout: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        width: '-webkit-fill-available',
        maxWidth: '249px',
        alignItems: 'center',
    },
    smileDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});
