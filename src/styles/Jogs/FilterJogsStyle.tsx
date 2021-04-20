import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    filterBody: {
        backgroundColor: '#eaeaea',
        height: '60px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20pt',
    },
    filterLayout: {
        display: 'flex',
        height: '100%',
    },
    textField: {
        backgroundColor: theme.palette.background.paper,
        height: '31px',
        borderRadius: '11px',
        border: '1px solid #979797',
        padding: '0px 20px',
        maxWidth: 'fit-content',
        marginLeft: '10px',
    },
    firstRow: {
        flex: 10,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    divider: {
        flex: 1,
    },
    secondRow: {
        flex: 10,
        display: 'flex',
        alignItems: 'center',
    },
}));
