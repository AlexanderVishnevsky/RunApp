import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    addNewJogLayout: {
        width: '33%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '44px',
        padding: '0 24px 24px',
    },
    addNewJogLayoutMobile: {
        width: '80%',
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '44px',
        padding: '0 35px 37px',
    },
    divCloseButton: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    closeButton: {
        fontSize: '37px',
        color: '#FFFFFF',
        transform: 'rotate(-45deg)',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    formView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        paddingBottom: '18px',
    },
    firstRow: {
        display: 'flex',
        width: '70%',
        justifyContent: 'space-between',
    },
    textField: {
        backgroundColor: theme.palette.background.paper,
        height: '31px',
        borderRadius: '11px',
        border: '1px solid #979797',
        padding: '0px 20px',
        width: '70%',
        marginLeft: '10px',
    },
    textFieldMobile: {
        backgroundColor: theme.palette.background.paper,
        height: '31pt',
        borderRadius: '11px',
        border: '1px solid #979797',
        padding: '0px 10px',
        width: '100%',
    },
}));
