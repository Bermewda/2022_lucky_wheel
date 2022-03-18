<template>
    <v-container class="lucky-draw-page">
        <lucky-draw-view :users="users"/>
    </v-container>
</template>

<script>
import LuckyDrawView from '@/views/LuckyDrawView.vue'
export default {
    name: 'LuckyDrawPage',

	components: { LuckyDrawView },

    data() {
        return {
            users: []
        }
    },

    async mounted() {
        this.users = await this.getUsersFromServer()
    },

    methods: {
        async getUsersFromServer() {
            return []
        }
    }
}
</script>

<style>  
.container {
    height: 100%;
}
</style>
