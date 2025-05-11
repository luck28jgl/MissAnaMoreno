import createPersistedState from 'vuex-persistedstate'
import { createStore } from "vuex";
import user from './user'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

const Store = createStore({
  modules: {
    user,
  },
  plugins: [createPersistedState()],
  strict: false,
});

export default Store;
