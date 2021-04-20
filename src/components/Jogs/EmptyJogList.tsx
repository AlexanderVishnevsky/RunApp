import { Typography, useTheme } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { SadSmileIcon } from '../../static/SadSmileIcon';
import SubmitButton from '../common/SubmitButton';
import { useStyles } from '../../styles/Jogs/EmptyJogListStyle';

const EmptyJogList = () => {
    const history = useHistory();
    const theme = useTheme();
    const classes = useStyles();
    return (
        <div className={classes.emptyJogListLayout}>
            <div className={classes.smileDiv}>
                <SadSmileIcon />
                <br />
                <Typography variant={'h3'} style={{ color: '#B0B0B0' }}>
                    Nothing is there
                </Typography>
            </div>
            <SubmitButton
                onClick={() => history.push('/jogs/add')}
                label={'Create your jog first'}
                processRequestState={'initial'}
                style={{
                    color: theme.palette.secondary.main,
                    borderColor: theme.palette.secondary.main,
                    width: 'inherit',
                }}
            />
        </div>
    );
};

export default EmptyJogList;
