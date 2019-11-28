/* eslint-disable no-console */
const Koa = require("koa");
const Router = require("koa-router");
const server = new Koa();
const router = new Router();
const axios = require("axios");
const httpUrl = "http://117.48.227.104:8080";
const request = require("request");
const cors = require("@koa/cors");
const koaBody = require("koa-body")({
  multipart: true // 允许上传多个文件
});
server.use(koaBody);
server.use(cors());
router.post("*", async (ctx, next) => {
  let path = ctx.request.path;
  let params = ctx.request.body;
  // await axios
  //   .post(`${httpUrl}${path}`, params, {
  //     headers: {
  //       "cache-control": "no-cache",
  //       "accept-encoding": "gzip, deflate",
  //       "user-agent": "PostmanRuntime/7.20.1"
  //     }
  //   })
  //   .then(data => {
  //     ctx.response.body = data;
  //   });
  console.log(`${httpUrl}${path}`, params, JSON.parse(params));
  ctx.response.body = await request.post(
    {
      url: `${httpUrl}${path}`,
      form: JSON.parse(params)
    },
    (error, response, body) => {
      console.dir(response.body);
      return response.body;
    }
  );
});
server.use(router.routes());
server.listen(3000, () => {
  console.log("server on 3000");
});
