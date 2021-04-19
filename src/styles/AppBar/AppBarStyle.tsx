import { makeStyles, Theme } from '@material-ui/core';
import Layout from '../../components/common/Layout';

/**
 * @see Layout
 */

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
}));
