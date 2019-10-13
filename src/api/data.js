const Data = [
  {
    id: 1,
    subject: 'Простой запрос',
    created: '2019-08-01 23:59',
    parts: [
      {
        id: 1,
        author: 'Vasiliy',
        text: 'Привет, как дела?',
        created: '2019-08-01 23:59',
      },
      {
        id: 2,
        author: 'Petr',
        created: '2019-08-02 01:20',
        text: 'Привет, все хорошо, спасибо!',
      },
      {
        id: 3,
        author: 'Petr',
        created: '2019-08-02 05:20',
        text: 'А у тебя?',
      },
    ],
  },
  {
    id: 2,
    subject: 'Вопрос по домену',
    created: '2016-03-02 14:19',
    parts: [
      {
        id: 1,
        author: 'Petr',
        created: '2019-08-06 12:20',
        text: 'Здравствуйте, тут есть кто-нибудь?',
      },
      {
        id: 2,
        author: 'Vasiliy',
        created: '2019-08-06 12:34',
        text: 'Да, я вас слушаю!',
      },
      {
        id: 3,
        author: 'Petr',
        created: '2019-08-06 12:38',
        text: 'Помогите мне настроить домен!',
      },
    ],
  },
  {
    id: 3,
    subject: 'Просто разговор',
    created: '2016-03-02 14:19',
    parts: [
      {
        id: 1,
        author: 'Igor',
        created: '2019-08-06 12:20',
        text: 'Здравствуйте, тут есть кто-нибудь?',
      },
      {
        id: 2,
        author: 'Vasiliy',
        created: '2019-08-06 12:34',
        text: 'Да, я вас слушаю!',
      },
      {
        id: 3,
        author: 'Igor',
        created: '2019-08-06 12:38',
        text: 'Какое там было длинное сообщение',
      },
      {
        id: 4,
        author: 'Vasiliy',
        created: '2019-08-06 12:40',
        text: '"Morbi hac eligendi totam? Elementum mi facilis aliquet id turpis '
          + 'ultrices mollitia porttitor praesentium animi ullamco eleifend'
          + ' scelerisque, sapien quam explicabo conubia egestas vehicula!"',
      },
      {
        id: 5,
        author: 'Igor',
        created: '2019-08-06 12:41',
        text: '"Morbi hac eligendi totam? Elementum mi facilis aliquet id turpis '
          + 'ultrices mollitia porttitor praesentium animi ullamco eleifend scelerisque, '
          + 'sapien quam explicabo conubia egestas vehicula!"??',
      },
      {
        id: 6,
        author: 'Vasiliy',
        created: '2019-08-06 12:42',
        text: 'Так точно! "Morbi hac eligendi totam? Elementum mi facilis aliquet id turpis '
          + 'ultrices  mollitia porttitor praesentium animi ullamco eleifend scelerisque, '
          + 'sapien quam explicabo conubia egestas vehicula!"',
      },
      {
        id: 7,
        author: 'Igor',
        created: '2019-08-06 12:43',
        text: 'Благодарю!!',
      },
    ],
  },
];

const getChatsDataApi = (userName) => {
  // eslint-disable-next-line
  console.log(`[getChatInfo] userName ${userName}`);
  return new Promise((resolve, reject) => {
    if (userName) {
      return resolve({ data: Data });
    }
    return reject(new Error('Нет информации о чатах для данного пользователя'));
  });
};

const getChatInfo = userId => userId;

export {
  getChatsDataApi,
  getChatInfo,
};
