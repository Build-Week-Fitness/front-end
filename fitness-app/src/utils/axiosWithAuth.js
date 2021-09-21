// will not use if headers is not required

import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://anytime-fitness.herokuapp.com'
    });
}

export default axiosWithAuth;