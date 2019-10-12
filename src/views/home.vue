<template>
  <v-content class="test">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <div class="headline">Перейти в
          <router-link to="/chat">
            <v-btn color="info">чат</v-btn>
          </router-link>
        </div>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  components: {},
};
</script>
