import { stories } from '@/components/stories'
import { feeds } from '../pages/feeds/'
import auth from '../pages/auth/auth.vue'

export default [
  {
    path: '/',
    name: 'feeds',
    component: feeds
  },
  {
    path: '/stories/:initialSlide',
    name: 'stories',
    component: stories
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  }
]
