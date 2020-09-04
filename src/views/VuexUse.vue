<template>
  <div>
    <Count />
    <button @click="decrease()">감소</button>
    <button @click="increase()">증가</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Count from '@/components/Count.vue';

@Component({
  components: {
    Count,
  },
})

export default class VuexUse extends Vue {
  public increase() {
    this.$store.dispatch('increase');
  }

  public decrease() {
    this.$store.dispatch('decrease');
  }
}
</script>
