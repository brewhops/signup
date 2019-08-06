<template>
  <div>
    Its just nothing
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import router from '@/router';

export default Vue.extend({
  name: 'home'
});
</script>

<style lang="stylus" scoped>
@import '../styles/breakpoints';

#content {
  display: grid;

  +greater-than(desktop) {
    grid-template-columns: 1fr;
  }

  grid-template-columns: 1fr;
  grid-template-areas: 'info';

  +less-than(tablet) {
    grid-template-columns: 98vw;
    grid-template-areas: 'info';
  }

  justify-items: center;
}
</style>
