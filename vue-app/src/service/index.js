import axios from 'axios'
import qs from 'qs'

const defaultOptions = {
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'no-cors'
}

const mainUrl = process.env.VUE_APP_ROOT_API

async function get(url, options) {
    if (!options) {
        options = defaultOptions
    }
    return await axios.get(url, options)
}

async function post(url, data, options) {
    if (!options) {
        options = defaultOptions
    }
    return await axios.post(url, data, options)
}

const service = {
    async getToken(data) {
        const options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode: 'no-cors'
        }
        const url = 'https://api.line.me/oauth2/v2.1/token'
        const response = await post(url, qs.stringify(data), options)

        return response.data
    },

    async getProfile(accessToken) {
        const options = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
            mode: 'no-cors'
        }
        const url = 'https://api.line.me/v2/profile'
        const response = await get(url, options)

        return response.data
    },

    async getUsersFromServer () {
        const url = `${mainUrl}/user`
        const response = await get(url)

        return response.data
    },

    async createUser (data) {
        const url = `${mainUrl}/user`
        const response = await post(url, data)

        return response.data
    },
}

export default service