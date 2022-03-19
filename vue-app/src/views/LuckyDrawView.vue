<template>
	<v-container>
        <div class="header">User List</div>

        <!-- user list -->
        <v-data-table
            :headers="headers"
            :items="users"
            :items-per-page="10"
        ></v-data-table>

        <!-- spinner wheel -->
        <lucky-draw-wheel v-if="users.length > 0" :users="users"/>
	</v-container>
</template>

<script>
import LuckyDrawWheel from '@/components/LuckyDrawWheel';

export default {
    name: "LuckyDrawPage",

    components: {
        LuckyDrawWheel
    },

    props: {
        users: {
            type: Array,
            default: () => []
        }
    },

    data(){
        return {
            luckyUserList: [],
            headers: [
                { text: 'Line display name', value: 'displayName' },
                { text: 'First name', value: 'firstName' },
                { text: 'Last name', value: 'lastName' },
                { text: 'Phone number', value: 'phone' },
            ]
        }
    }
};
</script>

<style scoped>
</style>
