<template>
  <div>
    <p>Count : {{ count }}</p>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
// typescript 클래스 문법으로 작성 가능
export default class TSClassCount extends Vue {
  private count: number = 0; // count에 타입 지정 가능

  private increment() {
    this.count++;
  }
  private decrement() {
    this.count--;
  }
}
</script>
