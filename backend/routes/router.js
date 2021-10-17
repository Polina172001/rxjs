const combineRouters = require('koa-combine-routers');
const messagesRouter = require('./messages/messages');
const router = combineRouters(messagesRouter);
module.exports = router;