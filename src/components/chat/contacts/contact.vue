<template>
  <div
    class="contact"
    v-bind:class="{ 'contact--active': chat.id == chatId }"
    v-on:click="switchChat(chat.id)"
  >
    <div class="contact__title">{{ chat.subject }}</div>
    <div class="contact__date">{{ getBeautyDate(chat.created) }}</div>
    <div class="contact__message">{{ chat.parts[0].text }}</div>
    <div class="contact__divider"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Contact',
  props: {
    chat: {
      type: Object,
      default: () => ({
        id: 0,
        subject: '',
        created: '',
        parts: [],
      }),
    },
  },
  computed: {
    ...mapGetters([
      'chatId',
    ]),
  },
  methods: {
    switchChat(newChatId) {
      // При попытке перейти в тот же чат - пресекаем
      if (newChatId === this.chatId) {
        return;
      }
      this.$router.push({ name: 'chat', params: { id: newChatId } });
    },
    getBeautyDate(date) {
      const beautyDate = new Date(date);
      return beautyDate.toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
};
</script>

<style scoped>
  .contact{
    position: relative;
    width: 300px;
    height: 100px;
  }
  .contact__title{
    position: absolute;
    width: 180px;
    height: 20px;
    left: 23px;
    top: 21px;
    font-size: 14px;
    line-height: 20px;
    color: #35383D;
  }
  .contact__date{
    position: absolute;
    width: 100px;
    height: 15px;
    left: 180px;
    top: 21px;
    font-size: 10px;
    line-height: 14px;
    text-align: right;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #B7C0C8;
  }
  .contact__message{
    position: absolute;
    width: 257px;
    height: 46px;
    left: 23px;
    top: 42px;
    font-size: 13px;
    line-height: 18px;
    color: #7D8790;
  }
  .contact__divider{
    position: absolute;
    width: 300px;
    height: 0px;
    left: 0px;
    top: 99px;
    border: 1px solid #E9EDF2;
  }
  /* modificators */
  .contact--active{
    background: #FFFFFF;
    border-left: 2px solid #398BFF;
  }
</style>
