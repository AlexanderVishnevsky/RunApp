import { Button, CircularProgress, Fade } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../styles/common/SubmitButtonStyle';
import { RequestStateInterface } from '../../interfaces/RequestStateInterface';

const SubmitButton = ({
    onClick,
    label,
    processRequestState,
    size = { width: '150px', height: '40px' },
}: {
    onClick: () => void;
    label: string;
    processRequestState: RequestStateInterface;
    size?: { width: number | string; height: number | string };
}) => {
    const classes = useStyles();

    return (
        <Button
            className={processRequestState === 'loading' ? classes.authButtonLoading : classes.authButton}
            onClick={onClick}
            disabled={processRequestState === 'loading'}
            style={{ width: size.width, height: size.height }}
        >
            {processRequestState === 'loading' ? (
                <Fade
                    in={processRequestState === 'loading'}
                    style={{
                        transitionDelay: processRequestState === 'loading' ? '300ms' : '0ms',
                    }}
                    unmountOnExit
                >
                    <CircularProgress className={classes.preloader} />
                </Fade>
            ) : processRequestState === 'error' ? (
                'Try again'
            ) : (
                label
            )}
        </Button>
    );
};

export default SubmitButton;
