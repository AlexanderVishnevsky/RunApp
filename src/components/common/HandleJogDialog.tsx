import SubmitButton from './SubmitButton';
import { useApplicationLayout } from '../../api/useApplicationLayout';
import { useStyles } from '../../styles/pages/AddNewJogPageStyle';
import React from 'react';
import { Grow, InputAdornment, InputBase, Typography } from '@material-ui/core';
import { HandleJogDialogInterface } from '../../interfaces/HandleJogDialogInterface';
import { useHistory } from 'react-router-dom';

const HandleJogDialog = ({
    inputsState,
    setInputsState,
    processRequestState,
    handleSubmitAction,
}: HandleJogDialogInterface): JSX.Element => {
    const classes = useStyles();
    const history = useHistory();
    const appView = useApplicationLayout();

    const handleChangeField = (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setInputsState({ ...inputsState, [e.target.name]: e.target.value });
        } catch (e) {
            console.warn('Unable to set values');
        }
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
                        onClick={() => handleSubmitAction()}
                        label={'Save'}
                        processRequestState={processRequestState}
                        style={{ width: '70%', height: '60px' }}
                    />
                </div>
            </div>
        </Grow>
    );
};
export default HandleJogDialog;
