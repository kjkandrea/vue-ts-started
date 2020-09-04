<template>
  <div>
    {{$store.state}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})

export default class VuexModule extends Vue {
  public created() {
    console.log(this.$store);
    this.$store.dispatch('setRootData', '멈무 Root~~');
    this.$store.dispatch('moduleA/setRootData', '멈무 A~~');
    this.$store.dispatch('moduleB/setRootData', '멈무 B~~');
    this.$store.dispatch('moduleDecorator/editData', '멈무 module decorator~~');
  }
}
</script>
