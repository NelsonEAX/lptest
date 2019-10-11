<template>
  <div
    class="post"
    v-bind:class="{ 'post--from': from, 'post--to': !from }"
  >
    <div
      class="post__text"
      v-bind:class="{ 'post__text--from': from, 'post__text--to': !from }"
    >{{ post.text }}</div>
    <div
      class="post__info"
      v-bind:class="{ 'post__info--from': from, 'post__info--to': !from }"
    >
      <div class="post__author">{{ post.author }}</div>
      <div class="post__created">{{ getBeautyDate(post.created) }}</div>
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
    from: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({}),
  methods: {
    getBeautyDate(date) {
      const beautyDate = new Date(date);
      return beautyDate.toLocaleString('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
  },
};
</script>

<style scoped>
  .post{
    position: relative;
    bottom:0;
    width: 380px;
    margin-bottom: 20px;
  }
  .post__text{
    padding: 20px;
    margin-bottom: 15px;
    font-size: 14px;
    color: #474E54;
  }
  .post__info{}
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
  .post--to{}
  .post--from{
    left: 200px
  }
  .post__text--from{
    background: #E9F5F4;
    border-radius: 8px 8px 0px 8px;
  }
  .post__text--to{
    background: #F6F7F9;
    border-radius: 8px 8px 8px 0px;
  }
  .post__info--from{
    text-align: right;
  }
  .post__info--to{}
</style>
