import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router'
import * as api from '../components/api'
import router from './'

export default createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'

  try {
    await api.user.getUserData()
    next(authRoute ? { name: 'feeds' } : null)
    console.log(1)
  } catch (e) {
    next(authRoute ? null : { name: 'auth' })
    console.log(2)
  }
})
