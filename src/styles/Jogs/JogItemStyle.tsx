import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    jogItemLayout: {
        display: 'flex',
        marginBottom: '40px',
        width: '100%',
        '&:hover': {
            backgroundColor: 'rgba(233, 144, 249, 0.15)',
            cursor: 'pointer',
            borderRadius: '12px',
        },
    },
    firstRow: {
        display: 'flex',
        width: 'calc(50% + 40px)',
        paddingRight: '40px',
        justifyContent: 'flex-end',
    },
    jogItemLayoutPreloader: {
        display: 'flex',
        marginBottom: '40px',
        width: '100%',
    },
});
