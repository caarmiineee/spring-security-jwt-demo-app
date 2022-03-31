/*const API_URL = "http://localhost:8050/api/auth/";

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + 'signin', {
            username,
            password
        })
        .then(res => {
            if (res.data.accessToken) {
                localStorage.getItem("user", JSON.stringify(res.data));
            }
            return res.data;
        });
};

const logout = () => {
    localStorage.getItem("user");
};

export default {
    register,
    login,
    logout,
}; */
import api from "./api";
import TokenService from "./TokenService";
const register = (username, email, password) => {
  return api.post("/auth/signup", {
    username,
    email,
    password
  });
};
const login = (username, password) => {
  return api
    .post("/auth/signin", {
      username,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        TokenService.setUser(response.data);
      }
      return response.data;
    });
};
const logout = () => {
  TokenService.removeUser();
};
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};
export default AuthService;