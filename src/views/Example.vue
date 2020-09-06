<template>
  <div>
    <h2>Basic Component</h2>
    <default-count />
    <h2>Class Component</h2>
    <t-s-class-count />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefaultCount from '@/components/example/DefaultCount.vue';
import TSClassCount from '@/components/example/TSClassCount.vue';

@Component({
  components: {
    DefaultCount,
    TSClassCount
  },
})

export default class Terms extends Vue {}
</script>
