<template>
	<!-- <v-container> -->
		<!-- <toolbar /> -->
		<v-app class="page">
			<v-main>
				<v-container fluid class="px-4">
					<router-view></router-view>
				</v-container>
			</v-main>
		</v-app>
	<!-- </v-container> -->
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
body {
	background-color: #eaebef;
	height: 100vh;
}

.page {
	padding: 0% 10%;
	height: 100%;
}

</style>

