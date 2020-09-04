import {Module, Mutation, Action, VuexModule} from 'vuex-module-decorators';

@Module({
  namespaced: true,
})
export default class moduleDecoratorA extends VuexModule {
  public data: string = 'moduleDecorator';

  @Mutation
  // this로 접근할 수 있기에 State 인자가 필요없음.
  public setData(data: string) {
    this.data = data;
  }

  @Action
  public editData(data: string) {
    this.context.commit('setData', data);
  }

  // getter
  get moduleData() {
    return this.data;
  }
}
