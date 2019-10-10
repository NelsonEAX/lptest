<template>
  <v-content class="test">
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="6"
        >
          <chat/>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import chat from '../components/chat/chat.vue';

export default {
  components: {
    chat,
  },
};
</script>
