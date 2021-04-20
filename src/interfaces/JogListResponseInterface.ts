import { BasicJogListResponseInterface } from './BasicJogListResponseInterface';

/**
 * Server response Object
 */
export interface JogListResponseInterface extends BasicJogListResponseInterface {
    id: number;
    user_id: string;
}
