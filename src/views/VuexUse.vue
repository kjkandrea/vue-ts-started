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
import { Action, Mutation } from 'vuex-class';
import Count from '@/components/Count.vue';

@Component({
  components: {
    Count,
  },
})

export default class VuexUse extends Vue {
  @Mutation public readonly setCount;
  @Action public readonly increase;
  @Action public readonly decrease;
}
</script>
