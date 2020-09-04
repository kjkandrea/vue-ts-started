import {ActionContext, Module} from 'vuex';
import {State} from '@/store/index';

interface moduleB {
  data: string;
}

const module: Module<moduleB, State> = {
  namespaced: true,
  state: {
    data: 'moduleB',
  },
  mutations: {
    setData(state, data: string) {
      state.data = data;
    },
  },
  actions: {
    setRootData({commit}, data: string) {
      commit('setData', data);
    },
  },
  getters: {
    data: (state) => state.data,
  },
};

export default module;
