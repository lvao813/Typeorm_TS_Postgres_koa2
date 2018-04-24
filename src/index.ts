import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import route from "./common/core/router";
const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body')({
  multipart: true,  // 允许上传多个文件
  formidable: {
    uploadDir: './public',// 上传的文件存储的路径 
    keepExtensions: true,  //  保存图片的扩展名
    hash: 'md5'
  }
});
const connection = createConnection().then(async connection => {//数据库访问操作
app.use(koaBody);

route.loadApis(app)



app.on('error', async (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app


app.listen(3000);
}).catch(error => console.log(error));

