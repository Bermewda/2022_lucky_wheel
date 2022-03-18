<template>
	<!-- <toolbar /> -->
	<v-app class="page">
		<v-main class="content">
			<v-container fluid class="px-4">
				<router-view></router-view>
			</v-container>

			<v-snackbar v-model="snackbar" :timeout="2000">
				<v-icon size="20">check_circle</v-icon>
				{{ alertMessage }}

				<template v-slot:action="{ attrs }">
					<v-btn
						color="primary"
						text
						v-bind="attrs"
						@click="closeSnackBar"
					>
						CLOSE
					</v-btn>
				</template>
			</v-snackbar>
		</v-main>
	</v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "App",

	computed: {
		...mapState({
			snackbar: 'snackbar',
			alertMessage: 'alertMessage',
		})
	},

	methods: {
		closeSnackBar() {
			this.$store.dispatch('setAlertMessage', '')
			this.$store.dispatch('setSnackBar', false)
		}
	}
};
</script>

<style>
body {
	height: 100vh;
}

.page {
	padding: 0% 10%;
	height: 100%;
	background-color: #eaebef !important;
}

.header {
	font-weight: 700;
    font-size: 32px;
    color: dimgray;
}

.content {
	background-color: white;
}
</style>

