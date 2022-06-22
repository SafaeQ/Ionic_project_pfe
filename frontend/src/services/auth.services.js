import axios from 'axios';

const api = require('./api')

const signup = (email, password, fullName, phoneNumber, adress, members, description) => {
    let data = {
        "fullName": fullName,
        "email": email,
        "password": password,
        "phoneNumber": phoneNumber,
        "adress": adress,
        "members": members,
        "description": description,
    }
    console.log('services',data);
    return axios.post('http://localhost:9900/register-association', data, {
      'Content-Type': 'application/json',
      credentials: true
  })
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data));
        }
        return response.data;
      });
  };

  const login = (email, password) => {
    return api.post('/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
  };

  const authService = {
    signup,
    login,
    logout,
  };
  
  export default authService;