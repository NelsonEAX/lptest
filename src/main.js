import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  /* Если переходим в чат - сохраняем ид в стор */
  if (to.name === 'chat' && to.params.id) {
    // eslint-disable-next-line
    console.log('beforeEach chat id', to.params.id);
    store.dispatch('SetChatId', { chatId: to.params.id || null })
      .then((res) => {
        // eslint-disable-next-line
        console.log('then SetChatId', res);
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.warn(`SetChatId error: ${err}`);
      });
  } else {
    // eslint-disable-next-line
    console.log('beforeEach', to.name);
  }

  next();
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
