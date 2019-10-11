<template>
  <div class="chat">
    <div class="chat__col-contacts">
      <div class="chat__contacts">
        <Contacts></Contacts>
      </div>
    </div>
    <div class="chat__col-posts">
      <div class="chat__posts">
        <Posts></Posts>
      </div>
      <div class="chat__divider"/>
      <div class="chat__entry-field">
        <EntryField></EntryField>
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from './contacts/contacts.vue';
import Posts from './posts/posts.vue';
import EntryField from './entry-field/entry-field.vue';

export default {
  name: 'Chat',
  components: {
    Contacts,
    Posts,
    EntryField,
  },
  mounted() {},
};
</script>

<style scoped>
  .chat{
    position: relative;
    height: 719px;
    width: 980px;
    display: flex;
    padding: 0px;
    margin-right: auto;
    margin-left: auto;
    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2) !important;
  }
  .chat__col-contacts{
    width: 300px;
    display: flex !important;
    background: #F3F6F8;
  }
  .chat__col-posts{
    display: flex !important;
    flex-wrap: wrap;
    flex-direction: row;
    width: 680px;
    background: #FFFFFF;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  }
  .chat__contacts{
  }
  .chat__posts{
    position: relative;
    height: 637px;
    width: 100%;
  }
  .chat__divider{
    width: 680px;
    height: 1px;
    left: 0px;
    top: 638px;
    border: 1px solid #E9EDF2;
  }
  .chat__entry-field{
    height: 80px;
    width: 100%;
  }
</style>
