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
    }
}
</script>

<style>  
.container {
    height: 100%;
}
</style>
