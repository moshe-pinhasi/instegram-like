import Axios from 'axios'
import config from '@/config'
import store from '@/store'

var axios = Axios.create({
    withCredentials: true
})

export const httpService = {
    get(endpoint, data, query) {
        return ajax(endpoint, 'GET', data, query)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'get', data = null, query = null) {
    try {
        const headers = {
            "x-session-id": store.getters.sessionId
        }

        const res = await axios({
            url: `${config.apiUrl}${endpoint}`,
            method,
            data,
            headers,
            params: query
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        if (err.response && err.response.status === 401) {
            window.location.assign('/#/login')
        }

        const {status, data} = err.response
        throw {status, data}
    }
}