<template>
  <div>
    <!-- @Props -->
    <p>
      {{alertMessage}}
    </p>
    {{parentMessage}}

    <!-- @Watch -->
    <button @click="counter">자식에서 숫자를 증가시킵니다.</button>

    <!-- @Provide, @inject -->
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue , Watch, Emit, Model, Inject} from 'vue-property-decorator';

@Component
export default class Children extends Vue {
  @Prop() public parentMessage?: string;
  public alertMessage: string = '';

  @Inject() public readonly message!: string;

  @Watch('parentMessage')
  public update(value: string, oldValue: string) {
    this.alertMessage = '메시지를 업데이트 하였습니다.';
  }

  @Emit()
  public counter() {
    console.log('counter click. emit event');
  }
}
</script>
