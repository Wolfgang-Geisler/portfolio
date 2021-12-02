export const state = () => ({
  global: null,
  navigations: null,
})

export const mutations = {
  SET_GLOBAL(state, global) {
    state.global = global
  },
  SET_NAVIGATIONS(state, navigations) {
    state.navigations = navigations
  },
}
export const actions = {
  async nuxtServerInit({ commit }) {
    const global = await this.$axios.$get('/global')
    commit('SET_GLOBAL', global)
    const navigations = await this.$axios.$get('/navigations')
    commit('SET_NAVIGATIONS', navigations)
  },
}

export const getters = {
  socialMediaIcons(state) {
    return state.global.socialMediaIcons
  },
  global(state) {
    return state.global
  },
  navigations(state) {
    return state.navigations
  },
};