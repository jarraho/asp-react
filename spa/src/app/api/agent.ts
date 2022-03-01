import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500));
axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.interceptors.response.use(async response => {
    await sleep();
    return response
}, (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat()
            }
            toast.error(data.title)
            break;
        case 401:
            toast.error(data.title)
            break;
        case 500:
            history.push('server-error', { error: data })
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
})
const responseBody = (response: AxiosResponse) => response.data;
const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
}
const Catalog = {
    list: () => requests.get('products'),
    details: (id: string) => requests.get(`products/${id}`)
}

const Errors = {
    get400Error: () => requests.get('error/bad-request'),
    get401Error: () => requests.get('error/unauthorized'),
    get404Error: () => requests.get('error/not-found'),
    getValidationError: () => requests.get('error/validation-error'),
    get500Error: () => requests.get('error/server-error')
}

const agent = {
    Catalog,
    Errors
}

export default agent;