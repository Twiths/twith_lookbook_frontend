import api from '../config/api'
import BackendService from './BackendService'


class UserService {
  getPublicContent() {
    return api.get("/all");
  }

  getUserBoard() {
    return api.get("/users", { headers: BackendService() });
  }

  getModeratorBoard() {
    return api.get("/mod", { headers: BackendService() });
  }

  getAdminBoard() {
    return api.get("admin", { headers: BackendService() });
  }
}

export default new UserService();