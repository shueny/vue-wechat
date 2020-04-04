import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './http'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCommentDots, faAddressBook, faTimes, faUser, faCheck, faEye, faEyeSlash, faPlus, faAngleLeft, faUserPlus, faAngleRight, faCamera } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(far, faCommentDots, faAddressBook, faTimes, faCheck, faUser, faEye, faEyeSlash, faPlus, faAngleLeft, faUserPlus, faAngleRight, faCamera);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')