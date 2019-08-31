<template>
  <div class="signup">
    <ClientInfoEntry />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ClientInfoEntry from "@/components/ClientInfoEntry.vue";

export default Vue.extend({
  name: "Signup",
  components: {
    ClientInfoEntry
  },
  props: {}
});
</script>
