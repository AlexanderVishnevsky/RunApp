import { Dispatch, SetStateAction } from 'react';
import { BasicJogListResponseInterface } from './BasicJogListResponseInterface';
import { JogListResponseInterface } from './JogListResponseInterface';
import { RequestStateInterface } from './RequestStateInterface';

export interface HandleJogDialogInterface {
    inputsState: BasicJogListResponseInterface | JogListResponseInterface;
    setInputsState:
        | Dispatch<SetStateAction<any>>
        | Dispatch<
              SetStateAction<{ distance: number; time: number; date: string | number; id?: number; user_id?: string }>
          >;
    processRequestState: RequestStateInterface;
    handleSubmitAction: () => void;
}
