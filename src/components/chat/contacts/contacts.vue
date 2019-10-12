<template>
  <div class="contacts">
    <div class="contacts__header">
      <div class="contacts__title">Сообщения</div>
      <div class="contacts__count">{{ chatsMessageCount }}</div>
    </div>
    <div class="contacts__divider"/>
    <div class="contacts__body">
      <Contact
        v-for="chat in chatsData"
        :key="chat.id"
        :chat="chat"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Contact from './contact.vue';

export default {
  name: 'Contacts',
  components: {
    Contact,
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'chatsData',
      'chatsMessageCount',
    ]),
  },
};
</script>

<style scoped>
  .contacts{
    position: relative;
    width: 300px;
    height: 719px;
  }
  .contacts__title{
    position: absolute;
    left: 6.67%;
    right: 67.33%;
    top: 3.34%;
    bottom: 93.88%;
    font-size: 14px;
    line-height: 20px;
    color: #656B77;
  }
  .contacts__count{
    position: absolute;
    left: 36%;
    right: 57.33%;
    top: 3.34%;
    bottom: 93.88%;
    font-size: 14px;
    line-height: 20px;
    color: #D2D8DE;
  }
  .contacts__divider{
    position: absolute;
    width: 300px;
    height: 0px;
    left: 0px;
    top: 60px;
    border: 1px solid #E9EDF2;
  }
  .contacts__body{
    position: absolute;
    width: 300px;
    height: 659px;
    top: 60px;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
