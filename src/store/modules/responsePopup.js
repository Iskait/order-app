export const responsePopup = {
  state: () => ({
    responseData: '',
  }),
  mutations: {
    getResponseData(state, payload) {
      state.responseData = payload;
    }
  },
}
