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
    return api.post('/register-association', data)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
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
    localStorage.removeItem("user");
  };

  const authService = {
    signup,
    login,
    logout,
  };
  
  export default authService;