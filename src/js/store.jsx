import { createStore } from "framework7/lite";

const store = createStore({
  state: {
    loading: false,
    countries: [],
    // ...
  },

  actions: {
    getCountries({ state }) {
      state.loading = true;
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((countries) => {
          state.countries = countries;
          state.loading = false;
        });
    },
    // ...
  },

  getters: {
    loading({ state }) {
      return state.loading;
    },
    countries({ state }) {
      return state.countries;
    },
  },
});

export default store;
