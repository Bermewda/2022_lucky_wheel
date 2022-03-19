import axios from 'axios'
import qs from 'qs'

const defaultOptions = {
    headers: {
        'Content-Type': 'application/json'
    },
    mode: 'no-cors'
}

const mainUrl = process.env.VUE_APP_ROOT_API

async function get(url) {
    return await axios.get(url)
}

async function post(url, data, options) {
    if (!options) {
        options = defaultOptions
    }
    return await axios.post(url, data, options)
}

function generateKey(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const service = {
    async getAuthenticateCode() {
        const responseType = 'code'
        const clientId = process.env.VUE_APP_CLIENT_ID
        const redirectUri = process.env.VUE_APP_REDIRECT_URL
        const state = generateKey(10)
        const scope = 'profile%20openid%20email'
        const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`
        const response = await get(url)

        console.log(response)
    },

    async getToken(data) {
        const options = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode: 'no-cors'
        }
        console.log('data', data)
        const url = 'https://api.line.me/oauth2/v2.1/token'
        const response = await post(url, qs.stringify(data), options)

        console.log(response)
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