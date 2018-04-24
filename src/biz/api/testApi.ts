import { User } from './../../entity/User';

const ar = require('koa-router')()
const nar = require('koa-router')()
import route from '../../common/core/router'
import {getConnection} from 'typeorm';

ar.get("/ji", async (ctx) => {
  console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await getConnection().manager.save(user);
    console.log("Saved a new user with id: " + user.id);
    
    console.log("Loading users from the database...");
    const users = await getConnection().manager.find(User);
    console.log("Loaded users: ", users);
     
    console.log("Here you can setup and run express/koa/any other framework.");
  ctx.body = "hello bug!"
})

nar.get("/hgcgjh", ctx => {
  ctx.body = "come from file nar router"
})

route.route_api.use(ar.routes()); 
route.route_dapi.use(nar.routes()); 