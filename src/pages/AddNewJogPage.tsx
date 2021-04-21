import { useHistory } from 'react-router-dom';
import { useRequest } from '../api/useRequest';
import React from 'react';
import { BasicJogListResponseInterface } from '../interfaces/BasicJogListResponseInterface';
import { dateFormatter } from '../api/dateFormatter';
import { RequestStateInterface } from '../interfaces/RequestStateInterface';
import HandleJogDialog from '../components/common/HandleJogDialog';

const AddNewJogPage = (): JSX.Element => {
    const history = useHistory();
    const { addData } = useRequest();

    const [inputsState, setInputsState] = React.useState<BasicJogListResponseInterface>({
        distance: 0,
        date: new Date().toLocaleDateString('ru-RU'),
        time: 0,
    });

    const [processRequestState, setProcessRequestState] = React.useState<RequestStateInterface>('initial');

    const addNewJog = (): void => {
        const convertedDate: string = dateFormatter()
            .FromStringToDate(inputsState.date as string)
            .toString();
        addData({ ...inputsState, date: convertedDate }).then((response: string) => {
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
            handleSubmitAction={addNewJog}
        />
    );
};

export default AddNewJogPage;
