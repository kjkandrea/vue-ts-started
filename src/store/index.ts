import Vue from 'vue';
import Vuex, {ActionContext, StoreOptions} from 'vuex';
import moduleA from './moduleA.store'
import moduleB from './moduleB.store'

Vue.use(Vuex);

export interface State {
  data: string
  count: number
}

const store: StoreOptions<State> = {
  modules: {
    moduleA,
    moduleB
  },
  state: {
    data: 'root',
    count: 0,
  },
  mutations: {
    setData(state, data: string) {
      state.data = data
    },
    setCount(state, count: number) {
      state.count = count;
    },
  },
  actions: {
    setRootData({commit}, data: string) {
      commit('setData', data)
    },
    increase({state, commit}: ActionContext<State, State>) {
      commit('setCount', state.count + 1);
    },
    decrease({state, commit}: ActionContext<State, State>) {
      commit('setCount', state.count - 1);
    },
  },
  getters: {
    data: (state) => state.data,
    count: (state: State) => state.count,
  },
};

export default new Vuex.Store(store);
