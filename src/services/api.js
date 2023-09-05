import axios from 'axios';

const _get = (url, params) => {
    return axios.get(url);
};
const _delete = (url, params) => {
    return axios.delete(url, params);
};
const _put = (url, params) => {
    return axios.put(url, params);
};
const _post = (url, params) => {
    return axios.post(url, params);
};

export const api = {
    _get,
    _delete,
    _post,
    _put
};