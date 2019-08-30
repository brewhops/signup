<template>
    <div class="signup">
      <h1>This is a signup page</h1>
      <form class="dataEntry" @submit.prevent="submit">
        <div class="inputGroup">
          <input type="text" placeholder="Name" />
        </div>
        <button class="">Submit</button>
      </form>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ClientInfoEntry",
  props: {},
  methods: {}
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
