import axios from 'axios';

export const userService = {
    login,
    registration
};

function login(userData) {
    const userInfo = {
        email: userData.email,
        password: userData.password
    };
    console.log(userInfo,"+++++")
    return axios.post(process.env.REACT_APP_API_URL+'/api/login', userInfo)
        .then((response) => {
            return response.data ;
        }).catch((error)=>{ 
            return Promise.reject(error);});
}


function registration(userData) {
    const userInfo = {
        fname: userData.fname,
        lname: userData.lname,
        email: userData.email,
        password: userData.password,
        gender: userData.gender,
        role: userData.role

    };
    console.log(userInfo,"+++++")
    return axios.post(process.env.REACT_APP_API_URL+'/api/createUser', userInfo)
        .then((response) => {
            return response.data ;
        }).catch((error)=>{ 
            return Promise.reject(error);});
}


