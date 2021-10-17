const Router = require('koa-router');
const faker = require('faker');
const uuid = require('uuid');

const router = new Router();

const unreadMessages = {
  status: 'ok',
  timestamp: new Date().toLocaleTimeString(),
  messages: [],
};

setInterval(() => {
  const msg = {
    id: uuid.v4(),
    from: faker.internet.email(),
    subject: faker.lorem.words(),
    body: faker.lorem.paragraph(),
    received: `${new Date().toLocaleTimeString()} ${faker.date
      .past()
      .toLocaleDateString()}`,
  };

  unreadMessages.messages.push(msg);
}, 5000);

router.get('/messages/unread', async (ctx) => {
  ctx.response.body = unreadMessages;
});

module.exports = router;