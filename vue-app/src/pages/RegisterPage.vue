<template>
    <v-container class="register-page">
        <register-view v-if="!isSuccess" @success="showSuccessPage"/>
        <success-view v-else/>
    </v-container>
</template>

<script>
import RegisterView from '@/views/RegisterView.vue'
import SuccessView from '@/views/SuccessView.vue'
export default {
    name: 'RegisterPage',

	components: { 
        RegisterView, 
        SuccessView 
    },

    data() {
        return {
            isSuccess: false
        }
    },

    methods: {
        showSuccessPage() {
            this.isSuccess = true
        }
    }
}
</script>
