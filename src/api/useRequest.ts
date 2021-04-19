import { loginConfigRequest } from './loginConfigRequest';
import { LoginResponseInterface } from '../interfaces/LoginResponseInterface';
import { JogListResponseInterface } from '../interfaces/JogListResponseInterface';
import { BasicJogListResponseInterface } from '../interfaces/BasicJogListResponseInterface';
const { REACT_APP_API_URL, REACT_APP_GET_TOKEN, REACT_APP_GET_ALL_DATA, REACT_APP_ADD_NEW_DATA } = process.env;

export function useRequest() {
    /**
     * Authenticate user using token
     * And save it to localStorage as {@var access_token}
     * @param uuid --> Some unique UUID
     */
    function auth(uuid = 'hello') {
        const config: RequestInit = { ...loginConfigRequest, body: JSON.stringify({ uuid: uuid }) };
        return fetch(`${REACT_APP_API_URL}/${REACT_APP_GET_TOKEN}`, config)
            .then(handleResponse)
            .then(({ response }: { response: LoginResponseInterface }) => {
                if (response.access_token) {
                    localStorage.setItem('access_token', response.access_token);
                }
                return response.access_token;
            })
            .catch((error: Error) => {
                console.error('[auth error]:', error.message);
                throw new Error(`${error.message}`);
            });
    }

    /**
     * Get all jogs
     */
    function getData() {
        const headers = { Authorization: `Bearer ${localStorage.getItem('access_token')}` };
        return fetch(`${REACT_APP_API_URL}/${REACT_APP_GET_ALL_DATA}`, { headers: headers })
            .then(handleResponse)
            .then(({ response }: { response: { jogs: Array<JogListResponseInterface>; users: any } }) => {
                return response.jogs;
            })
            .catch((error: Error) => {
                console.error('[getData error]:', error.message);
                throw new Error(`${error.message}`);
            });
    }

    /**
     * Add new jog
     * @param distance
     * @param date
     * @param time
     */
    function addData({ distance, date, time }: BasicJogListResponseInterface) {
        const config: RequestInit = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
            },
            method: 'POST',
            mode: 'cors',
            body: `date=${date}&time=${time}&distance=${distance}`,
        };
        debugger;
        return fetch(`${REACT_APP_API_URL}/${REACT_APP_ADD_NEW_DATA}`, config)
            .then((response: Response) => {
                debugger;
                return response.status === 201 ? 'success' : 'error';
            })
            .catch((e: Error) => {
                console.error('[addData error]:', e.message);
                return 'error';
            });
    }

    function editData({ id, user_id, distance, date, time }: JogListResponseInterface) {
        const config: RequestInit = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
            },
            method: 'PUT',
            mode: 'cors',
            //body: 'date=14%20%D0%98%D1%8E%D0%BD%202020&time=217&distance=217&jog_id=3442&user_id=3',
            // body: JSON.stringify({
            //     date: '14%20%D0%98%D1%8E%D0%BD%202020',
            //     time: time,
            //     distance: distance,
            //     jog_id: id,
            //     user_id: user_id,
            // }),
            body: `date=14%20%D0%98%D1%8E%D0%BD%202020&time=${time}&distance=${distance}&jog_id=${id}&user_id=${user_id}`,
        };
        return fetch(`${REACT_APP_API_URL}/${REACT_APP_ADD_NEW_DATA}`, config)
            .then((response: Response) => {
                return response.status === 200 ? 'success' : 'error';
            })
            .catch((e: Error) => {
                console.error('[editData error]:', e.message);
                return 'error';
            });
    }

    /**
     * remove access_token from local storage
     */
    function logout() {
        console.log('Logout called');
        localStorage.removeItem('access_token');
    }

    function handleResponse(response: Response) {
        return response.text().then((text: string) => {
            const data = text && JSON.parse(text);
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    logout();
                    window.location.href = '/login';
                }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        });
    }

    return { auth, getData, addData, editData, logout };
}
