const route = require('koa-router')()
const route_api = require('koa-router')()
const route_dapi = require('koa-router')()
const route_admin = require('koa-router')()
const route_dadmin = require('koa-router')()
const route_iapi = require('koa-router')()

route.prefix("/");
route_api.prefix("/api")
route_dapi.prefix("/dapi")
route_admin.prefix("/admin")
route_dadmin.prefix("/dadmin")
route_iapi.prefix("/iapi")

/**
 * 加载api
 * 
 * @param {any} app, koa2 app
 * @param {any} dir，api所在的目录，可以是相对于当前router.js的相对目录
 */
let loadApis = (app, dir?:string) => {
    let fs = require('fs');
    dir = dir || (process.cwd() + "/src/biz/api");
    let files = fs.readdirSync(dir).forEach(filename => {
        require(dir + "/" + filename);
    });

    route
    .use(route_api.routes())
    .use(route_dapi.routes())
    .use(route_admin.routes())
    .use(route_dadmin.routes())
    .use(route_iapi.routes())

    app.use(route.routes())
}

export default  {
  route,
  route_api,
  route_dapi,
  route_admin,
  route_dadmin,
  route_iapi,
  loadApis
};