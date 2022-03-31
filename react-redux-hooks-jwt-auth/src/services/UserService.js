import api from './api';

/* const API_URL = "http://localhost:8050/api/test/";

const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
}; */

const getPublicContent = () => {
    return api.get('/test/all');
};

const getUserBoard = () => {
    return api.get('/test/user');
};

const getModeratorBoard = () => {
    return api.get('/test/mod');
};

const getAdminBoard = () => {
    return api.get('/test/admin');
};

const UserService = {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};

export default UserService;