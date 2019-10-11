import Vue from 'vue';
import Vuex from 'vuex';
import { getChatsDataApi } from '@/api/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    chatsData: [],
    chatsMessageCount: 0,
    chatId: 0,
    chatPosts: [],
    userName: '',
  },
  getters: {
    chatsData: state => state.chatsData,
    chatsMessageCount: state => state.chatsData.reduce((acc, cur) => acc + cur.parts.length, 0),
    chatId: state => state.chatId,
    chatPosts: state => state.chatPosts,
    userName: state => state.userName,
  },
  mutations: {
    SET_USER_NAME: (state, payload) => {
      state.userName = payload.userName || '';
    },
    SET_CHATS_DATA: (state, payload) => {
      state.chatsData = payload.data || [];
    },
    SET_CHAT_ID: (state, payload) => {
      state.chatId = parseInt(payload.chatId, 10) || 0;
    },
    SET_CHAT_POSTS: (state, payload) => {
      state.chatPosts = (state.chatsData.find(chat => chat.id === payload.chatId)
        || { parts: [] }).parts;
    },
    ADD_MESSAGE_TO_CHAT: (state, payload) => {
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
      console.log('actions: SetUserName');
      return new Promise((resolve, reject) => {
        if (payload.userName) {
          context.commit('SET_USER_NAME', payload);
          context.dispatch('SetChatsData')
            .then((res) => {
              console.log('then SetChatsData', res);
              resolve(payload);
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          reject(new Error('Нет информации о имени пользователя'));
        }
      });
    },
    SetChatId: async (context, payload) => {
      console.log('actions: SetChatId');
      return new Promise((resolve, reject) => {
        if (payload.chatId) {
          context.commit('SET_CHAT_ID', payload);
          context.commit('SET_CHAT_POSTS', payload);
          resolve(payload);
        } else {
          reject(new Error('Нет информации о id чата'));
        }
      });
    },
    SetChatsData: async (context) => {
      console.log('actions: SetChatsData');
      return new Promise((resolve, reject) => {
        getChatsDataApi(context.state.userName).then((response) => {
          const { data } = response;
          context.commit('SET_CHATS_DATA', { data });
          context.dispatch('SetChatId', { chatId: context.getters.chatId });
          resolve(data);
        }).catch((error) => {
          reject(error);
        });
      });
    },
    AddMessageToChat: async (context, payload) => {
      console.log('actions: AddMessageToChat', payload);
      return new Promise((resolve, reject) => {
        if (payload.message) {
          context.commit('ADD_MESSAGE_TO_CHAT', payload);
          resolve(payload);
        } else {
          reject(new Error('Нет сообщения'));
        }
      });
    },
  },
});
