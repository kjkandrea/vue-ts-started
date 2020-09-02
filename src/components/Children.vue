<template>
  <div>
    <p>
      {{alertMessage}}
    </p>
    {{parentMessage}}

    <button @click="counter">자식에서 숫자를 증가시킵니다.</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue , Watch, Emit} from 'vue-property-decorator';

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
}
</script>
