import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";

const sleep = () => new Promise(resolve => setTimeout(resolve, 200));

axios.defaults.baseURL = "http://localhost:5000/api/";

const responseBode = (response: AxiosResponse)  => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response;
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
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            history.push({
            pathname: '/server-error',
            state: {error: data}
           });
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
})

const request = {
    get: (url: string) => axios.get(url).then(responseBode),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBode),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBode),
    delete: (url: string) => axios.delete(url).then(responseBode)
}

const Catalog = {
list: () => request.get("products"),
details: (id: number) => request.get(`products/${id}`),

}

const TestErrors = {
    get400Error: () => request.get("buggy/badrequest"),
    get401Error: () => request.get("buggy/unathorised"),
    get404Error: () => request.get("buggy/not-found"),
    get500Error: () => request.get("buggy/server-error"),
    getValidationError: () => request.get("buggy/validation-error"),
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;


