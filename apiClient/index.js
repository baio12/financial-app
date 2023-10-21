const customFetch = async (
    url,
    method,
    params,
    config
) => {
    let body = undefined;
    if (params && method != "GET") {
        body = params;
        if (params.constructor == Object) {
            body = typeof params !== "string" ? JSON.stringify(params) : params;
        }
    }
    let options = {
        method,
        body,
        headers: config?.headers
    };
    const response = await fetch((config?.baseURL || "") + url, options);
    return handleResponse(response);
}

const request = async (config) => {
    return customFetch(config.url, config.method, config.params, config);
};

const get = async (url, config) => {
    return customFetch(url, 'GET', null, config);
};

const post = async (url, params, config) => {
    return customFetch(url, 'POST', params, config);
};

const put = async (url, params, config) => {
    return customFetch(url, 'PUT', params, config);
};

const del = async (url, params, config) => {
    return customFetch(url, 'DELETE', params, config);
};

const handleResponse = async (res) => {
    const data = await res.json();
    if (!res.ok) {
        if (res.status == 401) {
            return;
        }
        return handleError(data);
    }
    return {
        data,
        status: res.status,
        ok: res.ok
    };
}

export const handleError = (error) => {
    const customError = new Error();
    const defaultMessageToUser = 'Error al procesar tu solicitud.';
    const defaultMessage = 'Error processing your request.';
    const defaultCode = 'badly_processed_request';
    const messageToUser = error?.message || defaultMessageToUser;
    customError.message = error?.message || defaultMessage;
    customError.messageToUser = messageToUser;
    customError.code = error?.code || defaultCode;
    return Promise.reject(customError);
}

const operations = {
    request,
    get,
    post,
    put,
    delete: del
}

export default operations