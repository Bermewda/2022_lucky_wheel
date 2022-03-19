<template>
	<v-container>
        <div class="text-and-button">
            <div class="login-line-header">LUCKY DRAW</div>
            <v-btn depressed color="primary" @click="goToLoginLine"> LOGIN LINE </v-btn>
        </div>
	</v-container>
</template>

<script>
export default {
    name: "LoginPage",

    methods: {
        goToLoginLine () {
            this.$emit('login')
        }
    }
};
</script>

<style scoped>
.text-and-button {
	display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.login-line-header {
    font-weight: 700;
    font-size: 40px;
    color: dimgray;
}
</style>
