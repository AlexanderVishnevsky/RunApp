import { Grow, useTheme } from '@material-ui/core';
import { BearFaceIcon } from '../static/BearFaceIcon';
import { useStyles } from '../styles/pages/AuthPageStyle';
import { Redirect, useHistory } from 'react-router-dom';
import { useRequest } from '../api/useRequest';
import React from 'react';
import SubmitButton from '../components/common/SubmitButton';
import { RequestStateInterface } from '../interfaces/RequestStateInterface';
import { useApplicationLayout } from '../api/useApplicationLayout';

const AuthPage = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const { auth } = useRequest();
    const theme = useTheme();
    const appView = useApplicationLayout();

    const [processRequestState, setProcessRequestState] = React.useState<RequestStateInterface>('initial');

    if (localStorage.getItem('access_token')) {
        return <Redirect to="/jogs" />;
    }

    const handleSubmit = () => {
        setProcessRequestState('loading');
        auth('hello')
            .then((res: string | undefined) => {
                if (res) {
                    history.push('/jogs');
                }
                setProcessRequestState('initial');
            })
            .catch((e: Error) => {
                console.error('auth error', e.message);
                setProcessRequestState('error');
            });
    };
    return (
        <Grow in={true} {...{ timeout: 500 }}>
            <div className={classes.root}>
                <div className={appView === 'desktop' ? classes.layout : classes.layoutMobile}>
                    <BearFaceIcon
                        color={appView === 'mobile' ? theme.palette.secondary.main : theme.palette.background.paper}
                    />
                    <SubmitButton
                        onClick={() => {
                            handleSubmit();
                        }}
                        label={'Let me in'}
                        processRequestState={processRequestState}
                        style={
                            appView === 'desktop'
                                ? {
                                      width: '150px',
                                      height: '40px',
                                  }
                                : {
                                      width: '100%',
                                      height: '60pt',
                                      color: theme.palette.secondary.main,
                                      borderColor: theme.palette.secondary.main,
                                  }
                        }
                    />
                </div>
            </div>
        </Grow>
    );
};

export default AuthPage;
