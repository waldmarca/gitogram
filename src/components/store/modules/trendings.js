import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_TRENDINGS: (state, { starred, trendings }) => {
      console.log('starred, trendings', starred, trendings)
      if (starred.length > 0) {
        state.data = trendings.filter((trending) => starred.find((starredRepo) => starredRepo.id === trending.id) === undefined)
      } else {
        state.data = trendings
      }
    },
    SET_README: (state, payload) => {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    },
    SET_FOLLOWING: (state, payload) => {
      state.data = state.data.map((repo) => {
        const editedRepo = repo
        if (payload.id === editedRepo.id) {
          editedRepo.following = payload.following
          editedRepo.loading = payload.loading
        }
        console.log(editedRepo)
        return editedRepo
      })
    }
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find((item) => item.id === id),
    getStarredRepo: (state) => (id) => state.data.find((repo) => repo.id === id)
  },
  actions: {
    async fetchTrendings ({ state, commit, rootState }) {
      if (state.data.length > 0) return

      console.log(rootState)

      try {
        const { data } = await api.trendings.getTrendings()
        commit('SET_TRENDINGS', { starred: rootState.starred.data, trendings: data.items })
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async starRepo ({ commit, getters }, id) {
      commit('SET_FOLLOWING', { id, loading: true })
      const { name: repo, owner } = getters.getStarredRepo(id)
      try {
        await api.starred.starRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', { id, loading: false, following: true })
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async unStarRepo ({ commit, getters }, id) {
      commit('SET_FOLLOWING', { id, loading: true })
      const { name: repo, owner } = getters.getStarredRepo(id)
      try {
        await api.starred.unStarRepo({ owner: owner.login, repo })
        commit('SET_FOLLOWING', { id, loading: false, following: false })
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }
}
