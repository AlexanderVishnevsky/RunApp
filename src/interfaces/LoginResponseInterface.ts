/**
 * Server response Object
 */
export interface LoginResponseInterface {
    access_token: string | undefined;
    created_at: string | number | undefined;
    expires_in: string | number | undefined;
    scope: string | undefined;
    token_type: 'bearer';
}
