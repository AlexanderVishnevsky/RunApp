import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
    jogListLayout: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'inherit',
        overflowY: 'auto',
        scrollBehavior: 'smooth',
    },
}));
