import { makeStyles, Theme } from '@material-ui/core';

/**
 * Common styles both for desktop and mobile
 */
const CommonAppBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 25pt',
};

export const useStyles = makeStyles((theme: Theme) => ({
    /**
     * Unique styles for desktop
     */
    appBarStyle: {
        minHeight: '116px',
        backgroundColor: theme.palette.primary.main,
        ...CommonAppBarStyle,
    },
    /**
     * Unique styles for mobile
     */
    appBarMobileStyle: {
        minHeight: '77px',
        backgroundColor: theme.palette.primary.main,
        ...CommonAppBarStyle,
    },

    appBarMobileMenuStyle: {
        minHeight: '77px',
        backgroundColor: theme.palette.background.paper,
        ...CommonAppBarStyle,
    },

    divCloseButton: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    closeButton: {
        fontSize: '37px',
        color: 'rgb(176, 171, 171)',
        transform: 'rotate(-45deg)',
        '&:hover': {
            cursor: 'pointer',
        },
    },
}));
