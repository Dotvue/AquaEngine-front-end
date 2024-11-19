import http from "../../shared/http-common.js";

class ProfileService {

    _resourceEndpoint = '/profiles';

    setToken() {
        const token = localStorage.getItem('token');

        this.httpOptionsAuthorized = {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        };
    }

    getProfileByUserId(userId) {
        try {
            this.setToken();
            return http.get(`${this._resourceEndpoint}/${userId}`, this.httpOptionsAuthorized);

        } catch (error) {
            console.error("Error in setting token or making request: ", error.message);
            throw error;
        }
    }
}

export default ProfileService;
