export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (role) => {
    return ({ type: LOGIN, payload: role });
}

export const logout = () => {
    return ({ type: LOGOUT, payload: false });
}