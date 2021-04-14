import { ReactNode } from 'react';
import { Grow } from '@material-ui/core';
import { useStyles } from '../../styles/common/LayoutStyle';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    const classes = useStyles();
    return (
        <Grow in={true} {...{ timeout: 500 }}>
            <div className={classes.paper}>{children}</div>
        </Grow>
    );
};

export default Layout;
