import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
    jogListLayout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'inherit',
        overflowY: 'auto',
        scrollBehavior: 'smooth',
    },
});
