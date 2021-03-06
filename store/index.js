export const state = () => ({
  counter: 0,
  homeData: [],
});

export const actions = {
  async getHome({ commit }) {
    // commit là thuộc tinh của store, tuc la store.commit
    const data = await this.$repositories.home.getHome(); //rất là legit
    commit("setHomeData", data);
  },
};

export const mutations = {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  setHomeData(state, data) {
    state.homeData = data;
  },
};
