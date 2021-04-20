import { Grow, InputAdornment, InputBase, Typography } from '@material-ui/core';
import { useStyles } from '../styles/pages/AddNewJogPageStyle';
import { useHistory, useLocation } from 'react-router-dom';
import { useRequest } from '../api/useRequest';
import React from 'react';
import { JogListResponseInterface } from '../interfaces/JogListResponseInterface';
import { dateFormatter } from '../api/dateFormatter';
import SubmitButton from '../components/common/SubmitButton';
import { RequestStateInterface } from '../interfaces/RequestStateInterface';
import { AppViewInterface } from '../interfaces/AppViewInterface';

const EditJogPage = ({ appView }: { appView: AppViewInterface }): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    const { editData } = useRequest();

    const [inputsState, setInputsState] = React.useState<JogListResponseInterface>(
        location.state as JogListResponseInterface,
    );

    const [processRequestState, setProcessRequestState] = React.useState<RequestStateInterface>('initial');

    const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setInputsState({ ...inputsState, [e.target.name]: e.target.value });
        } catch (e) {
            console.warn('Unable to set values');
        }
    };

    const submitForm = () => {
        const convertedDate: string = dateFormatter()
            .FromStringToDate(inputsState.date as string)
            .toString();
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
            <div className={appView === 'desktop' ? classes.addNewJogLayout : classes.addNewJogLayoutMobile}>
                <div className={classes.divCloseButton}>
                    <div className={classes.closeButton} onClick={() => history.goBack()}>
                        +
                    </div>
                </div>

                <div className={classes.formView}>
                    <div className={appView === 'desktop' ? classes.firstRow : undefined}>
                        <Typography>Distance</Typography>
                        <InputBase
                            className={appView === 'desktop' ? classes.textField : classes.textFieldMobile}
                            endAdornment={appView === 'desktop' && <InputAdornment position="end">Km</InputAdornment>}
                            type="number"
                            defaultValue={inputsState.distance}
                            onChange={handleChangeField}
                            name={'distance'}
                        />
                    </div>
                    <div className={appView === 'desktop' ? classes.firstRow : undefined}>
                        <Typography>Time</Typography>
                        <InputBase
                            className={appView === 'desktop' ? classes.textField : classes.textFieldMobile}
                            endAdornment={appView === 'desktop' && <InputAdornment position="end">Min</InputAdornment>}
                            type="number"
                            defaultValue={inputsState.time}
                            onChange={handleChangeField}
                            name={'time'}
                        />
                    </div>
                    <div className={appView === 'desktop' ? classes.firstRow : undefined}>
                        <Typography>Date</Typography>
                        <InputBase
                            className={appView === 'desktop' ? classes.textField : classes.textFieldMobile}
                            endAdornment={appView === 'desktop' && <InputAdornment position="end">Date</InputAdornment>}
                            defaultValue={inputsState.date}
                            onChange={handleChangeField}
                            name={'date'}
                        />
                    </div>
                    <SubmitButton
                        onClick={submitForm}
                        label={'Save'}
                        processRequestState={processRequestState}
                        style={{ width: '70%', height: '60px' }}
                    />
                </div>
            </div>
        </Grow>
    );
};

export default EditJogPage;
