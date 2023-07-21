import { createRouter, createMemoryHistory } from 'vue-router'
import routerPahes from './pages'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [...routerPahes],
})

export default router
