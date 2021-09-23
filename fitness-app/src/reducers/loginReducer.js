import { LOGIN, LOGOUT } from "../actions/loginActions";

let initialState = {
    isLogin: false,
    isAdmin: null,
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
                isLogin: action.payload,
                isAdmin: null,
            }
        default:
            return state;
    };
}
