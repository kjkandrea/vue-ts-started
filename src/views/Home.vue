<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Message />

    <!-- @Watch -->
    <Children :parentMessage="message" />
    <button @click="changeMessage">메시지를 바꾸어줄게요.</button>

    <!-- @emit -->
    <Children @counter="counter" />
    <p>
      부모에서 숫자를 보여줍니다. : {{count}}
    </p>

    <!-- @provide -->
    <Children @counter="counter" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import Message from '@/components/Message.vue';
import Children from '@/components/Children.vue';

@Component({
  components: {
    Message,
    Children,
  },
})
export default class Home extends Vue {
  public message: string = 'Hello, Prop!';

  public count: number = 0;

  @Provide('message') public msg: string = 'provide/inject example';

  public changeMessage() {
    this.message = 'Changed Message from Method';
  }

  public counter() {
    this.count ++;
  }
}
</script>
