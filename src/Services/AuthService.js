import api from '../config/api'



class AuthService {
  async login(username, password) {
    const response = await api
      .post('/users/login', { username, password });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, firstName, otherName, password) {
    return api.post('/users/signup', {
      username,
      firstName,
      otherName,
      password
    });
  }
}

export default new AuthService();