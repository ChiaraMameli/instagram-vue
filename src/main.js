/* Set up using Vue 2 */
import Vue from 'vue'
import App from './App'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret)
library.add(faHeart)
library.add(faHouseChimney)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

