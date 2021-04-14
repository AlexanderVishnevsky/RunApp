import { makeStyles } from '@material-ui/core';
import Layout from '../../components/common/Layout';

/**
 * @see Layout
 */
export const useStyles = makeStyles({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
    },
});
