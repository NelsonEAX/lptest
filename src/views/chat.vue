<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <Chat/>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import Chat from '../components/chat/chat.vue';

export default {
  components: {
    Chat,
  },
};
</script>
