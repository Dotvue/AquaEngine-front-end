import http from "../../shared/http-common.js";

class UserService {

    _resourceEndpoint = '/users';

    setToken() {
        const token = localStorage.getItem('token');

        this.httpOptionsAuthorized = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        };
    }

    getUserById(userId) {
        this.setToken();
        return http.get(`${this._resourceEndpoint}/${userId}`, this.httpOptionsAuthorized);
    }
}

export default UserService;
