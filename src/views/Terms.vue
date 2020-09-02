<template>
  <div class="about">
    <h1>약관</h1>
    <p>무슨무슨 약관에 동의합니다.</p>
    <terms-agree-check v-model="checked" @change="change"/>
    {{ description }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TermsAgreeCheck from '@/components/TermsAgreeCheck.vue';

@Component({
  components: {
    TermsAgreeCheck,
  },
})

export default class Terms extends Vue {
  public checked: boolean = false;
  public description: string = '동의하지 않습니다.';

  public change(checked: boolean): void {
    this.checked = checked;
    this.description = checked ? '동의 합니다.' : '동의 하지 않습니다.';
  }
}
</script>
