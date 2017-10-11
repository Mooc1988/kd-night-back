/**
 * Created by frank on 2017/10/11.
 */

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const router = new Router()

const app = new Koa()

app.use(bodyParser())

router.get('/ping', ctx => {
  'use strict'
  ctx.body = 'pong'
})

router.post('/pwd', ctx => {
  const {host} = ctx.request.body
  ctx.body = {host}
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
console.log('server listen on 3000')
