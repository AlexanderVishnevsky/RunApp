import React, { ReactNode } from 'react';
import { Grow } from '@material-ui/core';
import { useStyles } from '../../styles/common/LayoutStyle';
import { Redirect } from 'react-router-dom';

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
    const classes = useStyles();
    /**
     * Check authentication on route change
     * if access_token missing --> redirects to login
     * It works for all pages wrapped with this component
     */
    if (!localStorage.getItem('access_token')) {
        return <Redirect to="/login" />;
    }
    return (
        <Grow in={true} {...{ timeout: 500 }}>
            <div className={classes.paper}>{children}</div>
        </Grow>
    );
};

export default Layout;
