<template>
  <div class="posts">
    <Post
      v-for="post in chatPosts"
      :key="post.id"
      :post="post"
      :from="userName === post.author"
    ></Post>
    <Loader/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Post from './post.vue';
import Loader from '../../loader/loader.vue';

export default {
  name: 'Posts',
  components: {
    Post,
    Loader,
  },
  data: () => ({}),
  computed: {
    ...mapGetters([
      'chatPosts',
      'userName',
    ]),
  },
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
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-end;
  }
</style>
