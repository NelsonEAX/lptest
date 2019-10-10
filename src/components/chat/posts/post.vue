<template>
  <div class="post">
    <div class="post__text">{{ post.text }}</div>
    <div class="post__info">
      <div class="post__author">{{ post.author }}</div>
      <div class="post__created">{{ post.created }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      default: () => ({
        id: 0,
        author: '',
        text: '',
        created: Date.now(),
      }),
    },
  },
  data: () => ({}),
};
</script>

<style scoped>
  .post{
    position: relative;
    width: 380px;
    margin-bottom: 20px;
  }
  .post__text{
    padding: 20px;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 141.62%;
    color: #474E54;
    background: #F6F7F9; /********/
    border-radius: 8px 8px 8px 0px;
  }
  .post__info{

  }
  .post__author{
    font-size: 13px;
    color: #000000;
    display: inline-block;
    margin-right: 12px;
  }
  .post__created{
    font-size: 10px;
    color: #B7C0C8;
    display: inline-block;
  }
  /* modificators */

</style>
