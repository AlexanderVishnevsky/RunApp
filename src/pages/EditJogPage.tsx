import { Button, Typography, InputBase, Grow, InputAdornment } from '@material-ui/core';
import { useStyles } from '../styles/pages/AddNewJogPageStyle';
import { useHistory, useLocation } from 'react-router-dom';
import { useRequest } from '../api/useRequest';
import React from 'react';
import { JogListResponseInterface } from '../interfaces/JogListResponseInterface';
import { dateFormatter } from '../api/dateFormatter';
import SubmitButton from '../components/common/SubmitButton';
import { RequestStateInterface } from '../interfaces/RequestStateInterface';

const EditJogPage = (): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { editData } = useRequest();

    const [inputsState, setInputsState] = React.useState<JogListResponseInterface>(
        location.state as JogListResponseInterface,
    );

    const [processRequestState, setProcessRequestState] = React.useState<RequestStateInterface>('initial');

    const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputsState({ ...inputsState, [e.target.name]: e.target.value });
    };

    const submitForm = () => {
        const convertedDate = dateFormatter().FromStringToDate(inputsState.date).toString();
        setProcessRequestState('loading');
        editData({ ...inputsState, date: convertedDate }).then((response: string) => {
            if (response === 'success') {
                history.push('/jogs');
                setProcessRequestState('initial');
            } else {
                setProcessRequestState('error');
            }
        });
    };

    return (
        <Grow in={true} {...{ timeout: 500 }}>
            <div className={classes.addNewJogLayout}>
                <div className={classes.divCloseButton}>
                    <div className={classes.closeButton} onClick={() => history.push('/jogs')}>
                        +
                    </div>
                </div>

                <div className={classes.formView}>
                    <div className={classes.firstRow}>
                        <Typography>Distance</Typography>
                        <InputBase
                            className={classes.textField}
                            endAdornment={<InputAdornment position="end">Km</InputAdornment>}
                            type="number"
                            defaultValue={inputsState.distance}
                            onChange={handleChangeField}
                            name={'distance'}
                        />
                    </div>
                    <div className={classes.firstRow}>
                        <Typography>Time</Typography>
                        <InputBase
                            className={classes.textField}
                            endAdornment={<InputAdornment position="end">Min</InputAdornment>}
                            type="number"
                            defaultValue={inputsState.time}
                            onChange={handleChangeField}
                            name={'time'}
                        />
                    </div>
                    <div className={classes.firstRow}>
                        <Typography>Date</Typography>
                        <InputBase
                            className={classes.textField}
                            defaultValue={inputsState.date}
                            onChange={handleChangeField}
                            name={'date'}
                        />
                    </div>
                    <SubmitButton
                        onClick={submitForm}
                        label={'Save'}
                        processRequestState={processRequestState}
                        size={{ width: '70%', height: '60px' }}
                    />
                </div>
            </div>
        </Grow>
    );
};

export default EditJogPage;
