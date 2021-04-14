import { makeStyles } from '@material-ui/core';
import Layout from '../../components/common/Layout';
import theme from '../../theme';

/**
 * @see Layout
 */

/**
 * Common styles both for desktop and mobile
 */
const CommonAppBarStyle = {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 25pt',
};

export const useStyles = makeStyles({
    /**
     * Unique styles for desktop
     */
    appBarStyle: {
        minHeight: '116px',
        ...CommonAppBarStyle,
    },
    /**
     * Unique styles for mobile
     */
    appBarMobileStyle: {
        minHeight: '77px',
        ...CommonAppBarStyle,
    },
});
