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
  alertMessage: string = ''

  @Watch('parentMessage')
  update(value:string, oldValue:string) {
    this.alertMessage = '메시지를 업데이트 하였습니다.'
  }

  @Emit()
  counter() {
    console.log('counter click. emit event')
  }

  @Inject() readonly message!: string
}
</script>
