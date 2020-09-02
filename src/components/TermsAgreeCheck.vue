<template>
  <input type="checkbox" :checked="checked" @change="change" />
</template>

<script lang="ts">
import { Component, Vue, Model, Emit } from 'vue-property-decorator';

@Component
export default class TermsAgreeCheck extends Vue {
  @Model('change', {type: Boolean}) public readonly checked!: boolean;

  @Emit()
  public change(event: Event) {
    return event.target.checked;
  }
}
</script>

<style scoped>

</style>
