import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(vuetify, {
  iconfont: 'md', // 'md' || 'mdi' || 'fa' || 'fa4'
});

// Начальная установка данных
store.dispatch('SetUserName', { userName: 'Vasiliy' })
  .then((res) => {
    console.log('then SetUserName', res);
  })
  .catch((err) => {
    console.warn(`SetUserName error: ${err}`);
  });

router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  /* console.log('beforeEach', to, from);
  if (to.fullPath === from.fullPath) {
    console.log('beforeEach duplicate');
    return;
  } */

  /* Если переходим в чат - сохраняем ид в стор */
  if (to.name === 'chat' && to.params.id) {
    store.dispatch('SetChatId', { chatId: to.params.id || null })
      .then((res) => {
        console.log('then SetChatId', res);
      })
      .catch((err) => {
        console.warn(`SetChatId error: ${err}`);
      });
  }

  next();
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
