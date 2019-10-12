import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

const init = async () => {
  // Начальная установка данных
  await store.dispatch('SetUserName', { userName: 'Vasiliy' })
    .then((res) => {
      console.log('then SetUserName', res);
    })
    .catch((err) => {
      console.warn(`SetUserName error: ${err}`);
    });
};

init();

router.beforeEach((to, from, next) => {
  /* Если переходим в чат - сохраняем ид в стор */
  if (to.name === 'chat' && to.params.id) {
    console.log('beforeEach chat id', to.params.id);
    store.dispatch('SetChatId', { chatId: to.params.id || null })
      .then((res) => {
        console.log('then SetChatId', res);
      })
      .catch((err) => {
        console.warn(`SetChatId error: ${err}`);
      });
  } else {
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
