<template>
  <div>
    <input type="text" v-model="message" placeholder="메시지를 입력해주세요." />
    <div>{{message}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  public message: string = '';
}
</script>
