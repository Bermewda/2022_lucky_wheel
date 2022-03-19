<template>
    <v-container class="register-page">
        <register-view @success="showSuccessPage"/>
    </v-container>
</template>

<script>
import RegisterView from '@/views/RegisterView.vue'
export default {
    name: 'RegisterPage',

	components: { 
        RegisterView
    },

    data() {
        return {
            userProfile: null
        }
    },

    async mounted () {
        if (this.$route.query && this.$route.query.code) {
            const accessToken = await this.getAccessToken(this.$route.query.code)
            this.userProfile = await this.getProfile(accessToken)
        }
    },


    methods: {
        async getAccessToken (code) {
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

            const resp = await this.$service.getToken(data)

            return resp.access_token
        },

        async getProfile (accessToken) {
            const userProfile = await this.$service.getProfile(accessToken)
            console.log('user', userProfile)
            return userProfile
        },

        showSuccessPage () {
            this.$router.push({ path: '/'})
        }
    }
}
</script>
