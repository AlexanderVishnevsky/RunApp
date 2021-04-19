import { Button, Grow } from '@material-ui/core';
import { BearFaceIcon } from '../static/BearFaceIcon';
import { useStyles } from '../styles/pages/AuthPageStyle';
import { Redirect, useHistory } from 'react-router-dom';
import { useRequest } from '../api/useRequest';
import React from 'react';
import SubmitButton from '../components/common/SubmitButton';
import { RequestStateInterface } from '../interfaces/RequestStateInterface';

const AuthPage = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const { auth } = useRequest();

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
                setProcessRequestState('error');
            });
    };
    return (
        <Grow in={true} {...{ timeout: 500 }}>
            <div className={classes.root}>
                <div className={classes.layout}>
                    <BearFaceIcon />
                    <SubmitButton
                        onClick={() => {
                            handleSubmit();
                        }}
                        label={'Let me in'}
                        processRequestState={processRequestState}
                    />
                </div>
            </div>
        </Grow>
    );
};

export default AuthPage;
