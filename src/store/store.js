import { createStore } from 'vuex'

import { initPopup } from "./modules/initPopup.js";
import { responsePopup } from "./modules/responsePopup.js";
export default createStore({
  state: () => ({
    showInitForm: true,
  }),
  mutations: {
    toggleForms: (state) => {
      state.showInitForm = !state.showInitForm;
    } 
  },
  modules: {
    initPopup,
    responsePopup
  }
})