import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'md',
    },
    theme: {
        themes: {
            light: {
                primary: '#1bb71f',
                secondary: '#1b1d26',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                textColor: '#595a5e'
            }
        }
    }
}

export default new Vuetify(opts)
