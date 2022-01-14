import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { history } from "../..";

/*
When a request is sent to the server, the response is returned as a promise.
Also when a request is sent, a 204 request is sent which is known as a preflight request.
*/

const sleep = () => new Promise(resolve => setTimeout(resolve, 200));


axios.defaults.baseURL = "http://localhost:5000/api/";
axios.defaults.withCredentials = true; //since localhost:3000 and localhost:5000 both share the localhost domain, we need to indicate that credentials are allowed

const responseBody = (response: AxiosResponse)  => response.data;

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
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
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

//This  object is to be used by the client side code to make requests 
// to the server to update the basket at the frontend and the database
const Basket = { 
    get: () => request.get("basket"),
    addItem: (productId: number, quantity = 1) => request.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId: number, quantity = 1) => request.delete(`basket?productId=${productId}&quantity=${quantity}`),
}


const agent = {
    Catalog,
    TestErrors, 
    Basket
}

export default agent;


