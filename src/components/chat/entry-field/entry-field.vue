<template>
  <div class="entry-field">
    <textarea
      placeholder="Введите текст..."
      type="text"
      class="entry-field__message"
      v-model="message"
    ></textarea>
    <div
      class="entry-field__send"
      v-on:click="sendMessage()"
    >
      <div class="entry-field__send-icon">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.00936317 17.2563C0.00989464 17.6114 0.3701 17.8528 0.698756 17.7183L20.8694
        9.46274C21.2835 9.29324 21.2835 8.70676 20.8694 8.53726L0.698758 0.281704C0.370102 0.14719
         0.00989463 0.388579 0.00936317 0.743697L0.000660091 6.55894C0.000282918 6.81096 0.187529
         7.02387 0.437532 7.05569L11.8171 8.504C12.3996 8.57814 12.3996 9.42186 11.8172
         9.496L0.437533 10.9443C0.187529 10.9761 0.000282918 11.189 0.000660091
          11.4411L0.00936317 17.2563Z" fill="white"/>
        </svg>
      </div>
      <Loader/>
    </div>
  </div>
</template>

<script>
import Loader from '../../loader/loader.vue';

export default {
  name: 'EntryField',
  components: {
    Loader,
  },
  data: () => ({
    message: '',
    dialog: false,
  }),
  methods: {
    sendMessage() {
      if (!this.message) {
        return;
      }
      // this.dialog = true;
      this.$store.dispatch('AddMessageToChat', { message: this.message })
        .then((res) => {
          console.log('then AddMessageToChat', res);
        })
        .catch((err) => {
          console.warn(`AddMessageToChat error: ${err}`);
        });

      this.message = '';
    },
  },
  /* watch: {
    dialog (val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    }
  }, */
};
</script>

<style scoped>
  .entry-field{
    position: relative;
    padding: 0px;
  }
  .entry-field__message{
    width: 600px;
    height: 80px;
    resize: none;
    font-size: 14px;
    line-height: 141.62%;
  }
  .entry-field__message::placeholder {
    vertical-align: center;
    font-size: 14px;
    line-height: 141.62%;
    color: #7D8790;
   }
  .entry-field__send{
    position: absolute;
    width: 80px;
    height: 80px;
    left: 600px;
    top: 0px;
    background: #398BFF;
  }
  .entry-field__send-icon{
    position: absolute;
    left: 32px;
    top: 32px;
  }
</style>
