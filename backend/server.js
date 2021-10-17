const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');

const router = require('./routes/router');

const app = new Koa();

app.use(koaBody({
  urlencoded: true,
  multipart: true,
  json: true
}));

app.use(cors());

app.use(router());

const server = http.createServer(app.callback());

const port = process.env.PORT || 7072;

server.listen(port);