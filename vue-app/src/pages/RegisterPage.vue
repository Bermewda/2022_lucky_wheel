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

    methods: {
        showSuccessPage() {
            this.$router.push({ path: '/'})
        }
    }
}
</script>
