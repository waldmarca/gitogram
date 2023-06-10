import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_STARRED: (state, starred) => {
      state.data = starred.map((repo) => {
        repo.following = true
        repo.loading = false
        return repo
      })
    },
    SET_ISSUES_TO_REPO: (state, { id, issues }) => {
      state.data = state.data.map((repo) => {
        const editedRepo = repo

        if (repo.id === id) {
          editedRepo.issues = issues
        }
        return editedRepo
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
    getFollowingQty: (state) => state.data.length,
    getStarredRepo: (state) => (id) => state.data.find((repo) => repo.id === id)
  },
  actions: {
    async fetchStarred ({ commit }, payload) {
      try {
        const { data } = await api.starred.getStarredRepos({ limit: payload?.limit })
        commit('SET_STARRED', data)
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async fetchIssuesForRepo ({ commit }, { id, owner, repo }) {
      commit('SET_ISSUES_TO_REPO', {
        id,
        issues: {
          loading: true
        }
      })
      try {
        const { data } = await api.issues.getIssues({ owner, repo })

        commit('SET_ISSUES_TO_REPO', {
          id,
          issues: {
            data,
            loading: false
          }
        })
      } catch (e) {
        commit('SET_ISSUES_TO_REPO', {
          id,
          issues: {
            loading: false,
            error: e
          }
        })
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
