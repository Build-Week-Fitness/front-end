import axiosWithAuth from './../utils/axiosWithAuth';
// import classes from '../data/classes'

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getClasses = () => dispatch => {
    dispatch(fetchStart());
    axiosWithAuth()
        // .get("/api/auth/users/classes")
        .get("/api/classes")
        .then(res => {
            // dispatch(fetchSuccess(res.data));
            dispatch(fetchSuccess(res));
        })
        .catch(err => {
            console.log(err);
        })
}

export const login = (role) => {
    return ({ type: LOGIN, payload: role });
}

export const logout = () => {
    return ({ type: LOGOUT, payload: false });
}

export const fetchStart = () => ({ type: FETCH_START });

export const fetchSuccess = (classes) => {
    return ({ type: FETCH_SUCCESS, payload: classes });
}

export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error });
}