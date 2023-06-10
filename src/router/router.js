import { stories } from '@/components/stories'
import { feeds } from '../pages/feeds/'
import auth from '../pages/auth/auth.vue'
import user from '../pages/user/user.vue'
import repos from '../pages/repos/repos.vue'
import following from '../pages/following/following.vue'

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
  },
  {
    path: '/user',
    component: user,
    children: [{
      path: '',
      component: repos,
      name: 'user',
      props: {
        pageTitle: 'Repositories'
      }
    }, {
      path: 'following',
      component: following,
      name: 'following',
      props: {
        pageTitle: 'Following'
      }
    }]
  }
]
