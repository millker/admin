import { createStore } from 'vuex'
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
import settings from './modules/settings'

export default createStore({
    modules: {
        app,
        user,
        settings
    },
    getters
})