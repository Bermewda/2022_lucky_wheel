<template>
    <v-container class="login-page">
        <login-view />
    </v-container>
</template>

<script>
import LoginView from '@/views/LoginView.vue'
export default {
    name: 'LoginPage',

	components: { LoginView }
}
</script>

<style>
.container {
    height: 100%;
}
</style>
