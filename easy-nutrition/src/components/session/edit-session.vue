<template>
  <v-card>
    <v-card-title>
      <span class="headline">Edit Session</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.id" label="Session Id"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.startat" label="Session Startat"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.endat" label="Session End"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.linkedin" label="Session Linkedin "></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="item.user" label="UserId"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import SessionService from "@/services/sessions-service";

export default {
  name: "edit-Service",
  data() {
    return {
      item: {
        id: 0,
        name: '',
        user: ''
      }
    }
  },
  methods: {
    retrieveRole(id) {
      SessionService.get(id)
          .then((response) => {
            this.item = response.data;
          })
          .catch(e => {
            console.log((e));
          })
    },

    save() {
      SessionService.update(this.item.id, this.item)
          .then(() => {
            this.navigateToRoles();
          })
          .catch(e => {
            console.log(e);
          })
    },
    close() {
      this.navigateToRoles();
    },
    navigateToServices() {
      this.$router.push({name: 'services'});
    }
  },
  created() {
    this.retrieveSessions(this.$route.params.id);
  },
}

</script>

<style scoped>

</style>
