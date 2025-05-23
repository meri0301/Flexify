import {GlobalHelper, StringHelper} from 'core/helpers';
import {NetworkConstants} from "../constants/networkConstants";
import {StorageConstants} from "../constants/storageConstants";

class NetworkService {

    makeAPIGetRequest = (url, options, servicePath = NetworkConstants.FLEXIFY_SERVICE, basePath = NetworkConstants.REST_API_URL) => {
        options = options || {};
        options.method = NetworkConstants.request_methods.GET;
        return this.makeAPIRequest(url, options, servicePath, basePath);
    };

    makeAPIPostRequest = (url, options, servicePath = NetworkConstants.FLEXIFY_SERVICE, basePath = NetworkConstants.REST_API_URL) => {
        options = options || {};
        options.method = NetworkConstants.request_methods.POST;
        return this.makeAPIRequest(url, options, servicePath, basePath);
    };

    makeAPIPutRequest = (url, options, servicePath = NetworkConstants.FLEXIFY_SERVICE, basePath = NetworkConstants.REST_API_URL) => {
        options = options || {};
        options.method = NetworkConstants.request_methods.PUT;
        return this.makeAPIRequest(url, options, servicePath, basePath);
    };

    makeAPIDeleteRequest = (url, options, servicePath = NetworkConstants.FLEXIFY_SERVICE, basePath = NetworkConstants.REST_API_URL) => {
        options = options || {};
        options.method = NetworkConstants.request_methods.DELETE;
        return this.makeAPIRequest(url, options, servicePath, basePath);
    };

    createUrl = (arg, servicePath, basePath) => {
        let path = basePath ? basePath : NetworkConstants.REST_API_URL;
        path += !GlobalHelper.isNullOrUndefined(servicePath) ? servicePath : NetworkConstants.FLEXIFY_SERVICE;

        if (Array.isArray(arg)) {
            return [path, ...arg].join('/');
        }
        return `${path}/${arg}`;
    };

    createQueryParams = (queryParams) => {
        return Object.keys(queryParams).reduce((accumulator, key) => {
            let item = queryParams[key];

            if (item === null || item === undefined)
                return accumulator;

            if (Array.isArray(item)) {
                for (let index = 0; index < item.length; index++) {
                    let arrItem = item[index];
                    accumulator += `${key}=${arrItem}&`;
                }
            } else {
                accumulator += `${key}=${item}&`;
            }
            return accumulator;

        }, '');
    };

    makeAPIRequest = (partUrl, options, servicePath, basePath) => {
        options = options || {};
        return new Promise((resolve, reject) => {
            let url = this.createUrl(partUrl, servicePath, basePath);

            if (!url) {
                return reject(NetworkConstants.errors.INVALID_REQUEST_PARAMS);
            }

            if (options.query_params) {
                url += '?' + this.createQueryParams(options.query_params);
            }
            if (!options.method) {
                options.method = NetworkConstants.request_methods.GET;
            }

            let userToken = this._cache_service.get(StorageConstants.TOKEN);

            let fetch_options = {
                method: options.method,
                headers: options.headers || {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'version': 1,
                    'Authorization': userToken ? StorageConstants.TOKEN_TYPE + userToken : null
                }
            };


            if (options.headers) {
                fetch_options.headers = options.headers;
            }
            try {
                if (options.body) {
                    fetch_options.body = JSON.stringify(options.body);
                }
            } catch {
                return reject(NetworkConstants.errors.INVALID_REQUEST_PARAMS);
            }

            fetch(url, fetch_options)
                .then(async response => {

                    if (!response) {
                        return reject(NetworkConstants.errors.INVALID_RESPONSE_DATA);
                    }

                    const contentType = response.headers.get('content-type');

                    let data = {};
                    if (contentType && contentType.indexOf('application/json') !== -1) {
                        data = await response.json();
                    }
                    data.req_status = response.status;

                    try {
                        if (!data || !data.error_code) {
                            return resolve(data);
                        } else {
                            return resolve(data);
                        }
                    } catch {
                        return reject(NetworkConstants.errors.RESPONSE_PARSING_ERROR);
                    }
                }).catch(err => {
                const error = {
                    type: 'error',
                    title: 'Error',
                    error_code: 'error',
                    error_message: err.message
                };
                return resolve(error);
            });
        });
    };
}

export default NetworkService;
