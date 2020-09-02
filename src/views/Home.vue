<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Message />
    <Children :parentMessage="message" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
}
</script>
