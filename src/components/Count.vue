<template>
  <div>
    {{ $store.getters.count }}
    <div>
      <p>state: {{ count}}</p>
      <p>getter : {{ getCount }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';

@Component
export default class Count extends Vue {
  @State public readonly count!: number;
  @Getter public readonly getCount!: number;

}
</script>
