import { createStore } from 'vuex'
import trendings from './modules/trendings'
import auth from './modules/auth'
import starred from './modules/starred'
import user from './modules/user'
import repos from './modules/repos'

export default createStore({
  modules: {
    trendings,
    auth,
    starred,
    user,
    repos
  }
})
