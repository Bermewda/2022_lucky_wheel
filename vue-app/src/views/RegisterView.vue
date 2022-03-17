<template>
	<v-container>
		<div>
			<div class="header">Register</div>
			<!-- avatar -->
			<div class="position-center">
				<img src="@/assets/cat.jpg" class="avatar" />
			</div>

			<!-- form -->
			<v-form v-model="valid">
				<v-container>
					<v-row>
						<v-col cols="12" md="6">
							<v-text-field
								v-model="lineUid"
								label="Line uid"
								disabled
							></v-text-field>
						</v-col>

						<v-col cols="12" md="6">
							<v-text-field
								v-model="lineDisplayName"
								label="Line display name"
								disabled
							></v-text-field>
						</v-col>

						<v-col cols="12" md="6">
							<v-text-field
								v-model="firstname"
								:rules="nameRules"
								label="First name *"
								required
							></v-text-field>
						</v-col>

						<v-col cols="12" md="6">
							<v-text-field
								v-model="lastname"
								:rules="nameRules"
								label="Last name *"
								required
							></v-text-field>
						</v-col>

						<v-col cols="12" md="6">
							<v-text-field
								v-model="email"
								:rules="emailRules"
								label="E-mail *"
								required
							></v-text-field>
						</v-col>
					</v-row>
				</v-container>
			</v-form>

			<!-- submit btn -->
			<div class="position-center pt-3">
				<v-btn depressed color="primary" @click="submit">
					SUBMIT
				</v-btn>
				<!-- <v-snackbar v-model="snackbar">
					<v-icon>check_circle</v-icon>
					{{ text }}

					<template v-slot:action="{ attrs }">
						<v-btn
							color="primary"
							text
							v-bind="attrs"
							@click="snackbar = false"
						>
							CLOSE
						</v-btn>
					</template>
				</v-snackbar> -->
				<!-- <v-btn depressed color="primary" @click="submit"> SUBMIT </v-btn> -->
			</div>

			<!-- dialog -->
			<v-dialog v-model="dialog" persistent max-width="290">
				<v-card>
					<v-card-title class="text-h5 textColor--text">
						{{ errorCode }}
					</v-card-title>
					<v-card-text>{{ errorMessage }}</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary" text @click="dialog = false">
							Close
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
		</div>
	</v-container>
</template>

<script>
export default {
	name: "RegisterPage",

	data() {
		return {
		// snack bar
		snackbar: false,
		text: "Register success.",
		timeout: 2000,

		// form
		valid: false,
		firstname: "",
		lastname: "",
		nameRules: [(v) => !!v || "Name is required"],
		email: "",
		emailRules: [
			(v) => !!v || "E-mail is required",
			(v) => /.+@.+/.test(v) || "E-mail must be valid",
		],

		// dialog
		dialog: false,
		errorCode: '',
		errorMessage: '',
		};
	},

	computed: {
		imageSrc() {
		return "@/assets/cat.jpg";
		},
	},

	mounted() {
		this.$store.dispatch('setAlertMessage', '')
		this.$store.dispatch('setSnackBar', false)
	},

	methods: {
		submit() {
		// invalid form
		if (!this.valid) {
			this.errorCode = 'Warning'
			this.errorMessage = 'Please fill the requied field'
			this.dialog = true
			return;
		}

		// success
		this.$store.dispatch('setAlertMessage', 'Register success')
		this.$store.dispatch('setSnackBar', true)
		this.$emit("success");
		},
	},
};
</script>

<style scoped>
.register-line-header {
	font-weight: 700;
	font-size: 40px;
	color: dimgray;
}

.avatar {
	width: fit-content;
	width: 100px;
	height: 100px;
	border-radius: 50%;
}

.position-center {
	display: flex;
	justify-content: center;
}
</style>
