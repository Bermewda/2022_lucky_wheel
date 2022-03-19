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
            isSuccess: false
        }
    },

    mounted() {
        console.log('code', this.$route.query.code)
        if (this.$route.query && this.$route.query.code) {
            this.getToken(this.$route.query.code)
        }
    },


    methods: {
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
        },

        showSuccessPage() {
            this.$router.push({ path: '/'})
        }
    }
}
</script>
