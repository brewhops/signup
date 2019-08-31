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
import { KeyAccessor, 
         Client
} from "@/types/index";
import { HttpResponse } from 'vue-resource/types/vue-resource';

interface IClientEntryState extends KeyAccessor, Client {}

export default Vue.extend({
  name: "ClientInfoEntry",
  props: {},
  methods: {
    async addClient(client: IClientEntryState) {
      const cookie: BrewhopsCookie = Cookie.getJSON('loggedIn');
      const headers = {
        Authorization: `Bearer ${cookie.token}`
      };

      const requestObjects: Client = {
        name: client.name,
        admin_email: client.email,
        admin_password: client.password,
      }

      await this.$http.post(
        `${process.env.VUE_APP_API}/clients/add/`,
        requestObjects,
        {
          headers
        }
      );
    }
  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
