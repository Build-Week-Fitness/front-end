import { LOGIN, LOGOUT } from "../actions";

let initialState = {
    isLogin: false,
    isAdmin: false,
}

if (localStorage.getItem("token")) {
    initialState = {
        isLogin: true
    }
}


export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true,
                isAdmin: action.payload
            };
        case LOGOUT:
            console.log("LOGOUT ACTION");
            return {
                ...state,
                isLogin: action.payload
            }
        default:
            return state;
    };
}
