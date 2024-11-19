import http from '../../shared/http-common.js';

export class ProductService {
    _resourceEndpoint = '/products';

    getAll() {
        return http.get(this._resourceEndpoint);
    }

    getById(id) {
        return http.get(`${this._resourceEndpoint}/${id}`);
    }

    getByUserId(userId) {
        return http.get(`${this._resourceEndpoint}/users/${userId}/products`);
    }

    create(productData) {
        return http.post(this._resourceEndpoint, productData);
    }
}