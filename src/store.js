import Vue from 'vue';
import Vuex from 'vuex';
import { getChatsDataApi } from '@/api/data';

Vue.use(Vuex);

const delay = ms => new Promise(r => setTimeout(() => r(), ms));

export default new Vuex.Store({
  state: {
    chatsData: [],
    chatsMessageCount: 0,
    chatId: -1,
    chatPosts: [],
    userName: '',
    disablePosts: false,
    disableSend: false,
  },
  getters: {
    chatsData: state => state.chatsData,
    chatsMessageCount: state => state.chatsData.reduce((acc, cur) => acc + cur.parts.length, 0),
    chatId: state => state.chatId,
    chatPosts: state => state.chatPosts,
    userName: state => state.userName,
    disablePosts: state => state.disablePosts,
    disableSend: state => state.disableSend,
  },
  mutations: {
    SET_USER_NAME: (state, payload) => {
      console.log('mutations: SET_USER_NAME', payload);
      state.userName = payload.userName || '';
    },
    SET_CHATS_DATA: (state, payload) => {
      console.log('mutations: SET_CHATS_DATA', payload);
      state.chatsData = payload.data || [];
    },
    SET_CHAT_ID: (state, payload) => {
      console.log('mutations: SET_CHAT_ID', payload);
      state.chatId = parseInt(payload.chatId, 10) || 0;
    },
    SET_DISABLE_POSTS: (state, payload) => {
      console.log('mutations: SET_DISABLE_POSTS', payload);
      state.disablePosts = payload.state;
    },
    SET_DISABLE_SEND: (state, payload) => {
      console.log('mutations: SET_DISABLE_SEND', payload);
      state.disableSend = payload.state;
    },
    SET_CHAT_POSTS: (state) => {
      console.log('mutations: SET_CHAT_POSTS');
      const posts = state.chatsData.find(chat => chat.id === state.chatId);
      state.chatPosts = (posts || { parts: [] }).parts;
    },
    ADD_MESSAGE_TO_CHAT: (state, payload) => {
      console.log('mutations: ADD_MESSAGE_TO_CHAT', payload);
      const currentChat = state.chatsData.find(chat => chat.id === state.chatId);
      if (!currentChat) {
        return;
      }
      currentChat.parts.push({
        id: currentChat.parts.length + 1,
        author: state.userName,
        created: new Date(),
        text: payload.message,
      });
    },
  },
  actions: {
    SetUserName: async (context, payload) => {
      console.log('actions: SetUserName', payload);

      if (payload.userName) {
        await context.commit('SET_USER_NAME', payload);
        await context.dispatch('SetChatsData')
          .then(res => res)
          .catch((err) => {
            throw err;
          });
      } else {
        throw new Error('Нет информации о имени пользователя');
      }
    },
    SetChatId: async (context, payload) => {
      console.log('actions: SetChatId', payload);

      context.commit('SET_DISABLE_POSTS', { state: true });
      await delay(1500);
      context.commit('SET_DISABLE_POSTS', { state: false });

      if (payload.chatId >= 0) {
        await context.commit('SET_CHAT_ID', payload);
        await context.commit('SET_CHAT_POSTS');
        return payload;
      }
      throw new Error('Нет информации о id чата');
    },
    SetChatsData: async (context) => {
      console.log('actions: SetChatsData');

      await getChatsDataApi(context.state.userName).then((response) => {
        const { data } = response;
        context.commit('SET_CHATS_DATA', { data });
        if (context.getters.chatId !== -1) {
          context.dispatch('SetChatId', { chatId: context.getters.chatId });
        }
        return data;
      }).catch((error) => {
        throw error;
      });
    },
    AddMessageToChat: async (context, payload) => {
      console.log('actions: AddMessageToChat', payload);

      context.commit('SET_DISABLE_SEND', { state: true });
      await delay(1500);
      context.commit('SET_DISABLE_SEND', { state: false });

      if (payload.message) {
        await context.commit('ADD_MESSAGE_TO_CHAT', payload);
        return payload;
      }

      throw new Error('Нет сообщения');
    },
  },
});
