import { Button, CircularProgress, Fade } from '@material-ui/core';
import React from 'react';
import { useStyles } from '../../styles/common/SubmitButtonStyle';
import { RequestStateInterface } from '../../interfaces/RequestStateInterface';

const SubmitButton = ({
    onClick,
    label,
    processRequestState,
    style,
}: {
    onClick: () => void;
    label: string;
    processRequestState: RequestStateInterface;
    style?: Record<string, any>;
}): JSX.Element => {
    const classes = useStyles();

    return (
        <Button
            className={processRequestState === 'loading' ? classes.authButtonLoading : classes.authButton}
            onClick={onClick}
            disabled={processRequestState === 'loading'}
            style={style}
        >
            {processRequestState === 'loading' ? (
                <Fade
                    in={processRequestState === 'loading'}
                    style={{
                        transitionDelay: processRequestState === 'loading' ? '300ms' : '0ms',
                    }}
                    unmountOnExit
                >
                    <CircularProgress color={'inherit'} />
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
