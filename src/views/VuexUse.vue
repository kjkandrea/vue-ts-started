<template>
  <div>
    <Count />
    <div>
      actions :
      <button @click="decrease()">감소</button>
      <button @click="increase()">증가</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Mutation } from 'vuex-class'
import Count from '@/components/Count.vue';

@Component({
  components: {
    Count,
  },
})

export default class VuexUse extends Vue {
  @Mutation readonly setCount
  @Action readonly increase
  @Action readonly decrease
}
</script>
