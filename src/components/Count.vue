<template>
  <div>
    {{ $store.getters.count }}
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

export default class Count extends Vue {}
</script>
