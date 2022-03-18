<template>
    <v-container class="lucky-draw-page">
        <lucky-draw-view />
    </v-container>
</template>

<script>
import LuckyDrawView from '@/views/LuckyDrawView.vue'
export default {
    name: 'LuckyDrawPage',

	components: { LuckyDrawView }
}
</script>

<style>  
.container {
    height: 100%;
}
</style>
