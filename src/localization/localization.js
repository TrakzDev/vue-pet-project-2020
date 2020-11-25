import Vue from 'vue'
import VueI18n from 'vue-i18n'
import rus from './rus'
import eng from './eng'

Vue.use(VueI18n)

export default new VueI18n({
    locale: 'ru',
    messages: {
        en: eng,
        ru: rus
    }
})
