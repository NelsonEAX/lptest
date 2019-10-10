<template>
  <div class="posts">
    <Post
      v-for="part in parts"
      :key="part.id"
      :post="part"
    ></Post>
  </div>
</template>

<script>
import Post from './post.vue';

export default {
  name: 'Posts',
  components: {
    Post,
  },
  data: () => ({
    parts: [
      {
        id: 1,
        author: 'vasya',
        text: 'Привет, как дела?',
        created: '2019-08-01 23:59',
      },
      {
        id: 2,
        author: 'petya',
        created: '2019-08-02 01:20',
        text: 'Привет, все хорошо, спасибо!',
      },
      {
        id: 3,
        author: 'petya',
        created: '2019-08-02 05:20',
        text: 'А у тебя?',
      },
      {
        id: 4,
        author: 'vasya',
        created: '2019-08-02 05:20',
        text: 'Morbi hac eligendi totam? Elementum mi facilis aliquet id turpis ultrices mollitia porttitor praesentium animi ullamco eleifend scelerisque, sapien quam explicabo conubia egestas vehicula!',
      },
      {
        id: 5,
        author: 'petya',
        created: '2019-08-02 05:20',
        text: 'Morbi hac eligendi totam? Elementum mi facilis aliquet id turpis ultrices mollitia porttitor praesentium animi ullamco eleifend scelerisque, sapien quam explicabo conubia egestas vehicula!',
      },
    ],
  }),
};
</script>

<style scoped>
  .posts{
    position:absolute;
    height: inherit;
    width: inherit;
    bottom:0;
    padding: 0px 40px 0px 40px;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
