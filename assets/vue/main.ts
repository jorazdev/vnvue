
import { createApp } from 'vue'

import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

//import '../styles/style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'material-icons/iconfont/material-icons.css'; // https://www.npmjs.com/package/material-icons
import 'material-symbols'; // https://www.npmjs.com/package/material-symbols
import apolloClient from './plugins/apollo-client'
import { provideApolloClient } from '@vue/apollo-composable'

const app = createApp(App)

app.use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  
provideApolloClient(apolloClient)

import '../styles/index.css'


app.use(router)
   .use(createPinia())
   .mount('#app')
