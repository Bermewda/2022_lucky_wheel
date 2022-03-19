<template>
	<div>
		<!-- fortune wheel -->
		<fortune-wheel
			style="width: 500px; max-width: 100%"
			:verify="canvasVerify"
			:canvas="canvasOptions"
			:prizes="luckyDrawUserList"
			@rotateStart="onRotateStart"
			@rotateEnd="onRotateEnd"
		/>

		<!-- dialog -->
		<v-dialog v-model="dialog" persistent max-width="290">
			<v-card>
				<v-card-title class="text-h5 textColor--text">
					{{ title }}
				</v-card-title>
				<v-card-text v-html="message"></v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" text @click="dialog = false">
						Close
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import FortuneWheel from "vue-fortune-wheel";
import "vue-fortune-wheel/lib/vue-fortune-wheel.css";
import randomColor from "randomcolor";

export default {
	name: "LuckyDrawWheel",

	components: {
		FortuneWheel,
	},

	props: {
        users: {
            type: Array,
            default: () => []
        }
    },

	data() {
		return {
			prizeId: 0,
			canvasVerify: false,
			canvasOptions: {
				btnWidth: 140,
				borderColor: "#584b43",
				borderWidth: 6,
				lineHeight: 30,
			},
			// colors: ['#2196F3','#FF5252','#FFC107'],

			// dialog
			dialog: false,
			title: '',
			message: '',
		};
	},

	computed: {
		luckyDrawUserList() {
			const totalOfUsers = this.users.length

			return this.users.map((user) => {
				return {
					id: 3,
					name: user.displayName,
					value: user.displayName,
					bgColor: randomColor({ luminosity: 'bright' }),
					color: "#ffffff",
					probability: 100/totalOfUsers,
				}
			})
		}
	},

	methods: {
		onRotateStart(rotate) {
			if (this.canvasVerify) {
				const verified = true;
				this.doServiceVerify(verified, 2000).then((verifiedRes) => {
					// rotate when verify success
					if (verifiedRes) {
						rotate();
						this.canvasVerify = false;
					} else {
						alert("Failed verification");
					}
				});
				return;
			}
		},

		onRotateEnd(user) {
			this.openDialog (user.name)
		},

		doServiceVerify(verified, duration) {
			return new Promise((resolve) => {
				setTimeout(() => {
					resolve(verified);
				}, duration);
			});
		},

		openDialog (username) {
			this.title = 'Congratulations'
			this.message = `<b>${username}</b> is the lucky one`
			this.dialog = true
		}
	},
};
</script>
