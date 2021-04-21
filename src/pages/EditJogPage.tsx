import { useHistory, useLocation } from 'react-router-dom';
import { useRequest } from '../api/useRequest';
import React from 'react';
import { JogListResponseInterface } from '../interfaces/JogListResponseInterface';
import { dateFormatter } from '../api/dateFormatter';
import { RequestStateInterface } from '../interfaces/RequestStateInterface';
import HandleJogDialog from '../components/common/HandleJogDialog';

const EditJogPage = (): JSX.Element => {
    const history = useHistory();
    const location = useLocation();
    const { editData } = useRequest();

    const [inputsState, setInputsState] = React.useState<JogListResponseInterface>(
        location.state as JogListResponseInterface,
    );

    const [processRequestState, setProcessRequestState] = React.useState<RequestStateInterface>('initial');

    const submitForm = (): void => {
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
        <HandleJogDialog
            inputsState={inputsState}
            setInputsState={setInputsState}
            processRequestState={processRequestState}
            handleSubmitAction={submitForm}
        />
    );
};

export default EditJogPage;
