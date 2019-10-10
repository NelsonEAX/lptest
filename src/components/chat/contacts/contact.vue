<template>
  <div class="contact contact--active">
    <div class="contact__title">Привет!</div>
    <div class="contact__date">12 МАЯ 2023</div>
    <div class="contact__message">Pharetra, eum ut primis orci labore velit?
      Ridiculus. Officia mattis pariatur justo </div>
    <div class="contact__divider"/>
  </div>
</template>

<script>
export default {
  name: 'Contact',
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
    width: 54px;
    height: 20px;
    left: 23px;
    top: 21px;
    font-size: 14px;
    line-height: 20px;
    color: #35383D;
  }
  .contact__date{
    position: absolute;
    width: 67px;
    height: 15px;
    left: 213px;
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
