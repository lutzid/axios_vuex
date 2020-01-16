import axios from 'axios'

axios.interceptors.request.use(config => {
        const params = {
            ...config.params,
            requestId: 'asjdkfasjdkfl'
        }
        return {
            ...config,
            params
        }
    }, 
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
    if(response.status === 200){
        console.log(response.status)
        window.location.href = '#/Success'
    }
    return Promise.resolve(response.data);
    }, 
    error => {
        console.log(error.response)      
        if(error.response.status === 404) {
            window.location.href = '#/Fail'
        }
        return Promise.reject(error);
    }
)

export default axios