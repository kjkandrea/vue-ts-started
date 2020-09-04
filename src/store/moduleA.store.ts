import {ActionContext, Module} from 'vuex';
import {State} from '@/store/index';

interface moduleA {
  data: string;
}

const module: Module<moduleA, State> = {
  namespaced: true,
  state: {
    data: 'moduleA',
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
