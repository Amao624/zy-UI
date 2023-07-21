import { createApp } from 'vue'
import App from './App.vue'
import zy_UI from './packages/index'
// import zy_UI from '@amao_/zy-ui'
// import '../node_modules/@amao_/zy-ui/dist/style.css'
// import '@amao_/zy-ui/dist/style.css'

import router from './router'

import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const app = createApp(App)

app.use(zy_UI)

app.use(router)

app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((element) => {
    hljs.highlightElement(element)
  })
})

app.mount('#app')
