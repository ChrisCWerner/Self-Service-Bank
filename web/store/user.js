export const state = () => ({
  user: null,
})

export const getters = {
  user: (state) => state.user || {},
}

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  async getUser({ commit, state }, { id }) {
    if (state.user) return
    const res = await this.$axios.get('users/' + id)
    if (res.status < 400) {
      commit('SET_USER', res.data)
    }
  },
}
