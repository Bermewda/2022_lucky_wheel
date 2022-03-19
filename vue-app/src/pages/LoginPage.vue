<template>
    <v-container class="login-page">
        <login-view @login="loginLine"/>
    </v-container>
</template>

<script>
import LoginView from '@/views/LoginView.vue'
export default {
    name: 'LoginPage',

	components: { LoginView },

    mounted() {
        console.log('code', this.$route.query.code)
        if (this.$route.query && this.$route.query.code) {
            this.getToken(this.$route.query.code)
        }
    },

    methods: {
        loginLine () {
            const responseType = 'code'
            const clientId = process.env.VUE_APP_CLIENT_ID
            const redirectUri = process.env.VUE_APP_REDIRECT_URL
            const state = this.generateKey(10)
            const scope = 'profile%20openid%20email'
            const url = `https://access.line.me/oauth2/v2.1/authorize?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}&scope=${scope}`
            window.location.replace(url)
        },

        generateKey (length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },

        async getToken (code) {
            const grant_type = 'authorization_code'
            const client_id = process.env.VUE_APP_CLIENT_ID
            const redirect_uri = process.env.VUE_APP_REDIRECT_URL
            const client_secret = process.env.VUE_APP_CLIENT_SECRET
            const data = {
                grant_type,
                code,
                client_id,
                redirect_uri,
                client_secret
            }

            await this.$service.getToken(data)
        }
    }
}
</script>

<style>  
.container {
    height: 100%;
}
</style>
