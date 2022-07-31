export const initPopup = {
  state: () => ({
    visibleForm: false,
    selectedCity: 1,
    cities: [
      {
        id: 1,
        name: "Москва",
      },
      {
        id: 2,
        name: "Санкт-Петербург",
      },
      {
        id: 3,
        name: "Казань",
      },
    ],
  }),
  mutations: {
    setVisibleForm(state) {
      state.visibleForm = !state.visibleForm;
    },
    chooseCity(state, payload) {
      state.selectedCity = payload;
    }
  },
}
