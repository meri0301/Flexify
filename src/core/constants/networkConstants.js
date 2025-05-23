const NetworkConstants = {
    REST_API_URL: "http://api-flexify.int/",
    FLEXIFY_SERVICE: 'flexify-service',

    request_url: {
        ME: 'me',
        USERS: 'users',
        TOKEN: 'Token',
        SIGN_UP: 'SignUp',
        HISTORY: 'history',
        FEEDBACK: 'feedback',
        REMINDER: 'reminder',
    },
    request_methods: {
        GET: 'get',
        POST: 'post',
        PUT: 'put',
        DELETE: 'delete',
        PATCH: 'patch'
    },
    errors: {
        INVALID_REQUEST_PARAMS: 'invalid_request_parameters',
        RESPONSE_PARSING_ERROR: 'response_parsing_error',
        INVALID_RESPONSE_DATA: 'invalid_response_data',

    }
}

export {NetworkConstants};