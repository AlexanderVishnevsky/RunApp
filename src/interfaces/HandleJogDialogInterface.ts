import { Dispatch, SetStateAction } from 'react';
import { BasicJogListResponseInterface } from './BasicJogListResponseInterface';
import { JogListResponseInterface } from './JogListResponseInterface';
import { RequestStateInterface } from './RequestStateInterface';

export interface HandleJogDialogInterface {
    inputsState: BasicJogListResponseInterface | JogListResponseInterface;
    setInputsState:
        | Dispatch<SetStateAction<JogListResponseInterface>>
        | Dispatch<SetStateAction<BasicJogListResponseInterface>>;
    processRequestState: RequestStateInterface;
    handleSubmitAction: () => void;
}
