
import {
  Body,
  Controller,
  Get,
  Header,
  Params,
  Post,
  Query
} from 'koa-ts-controllers';
import {IsNumberString, IsNotEmpty} from 'class-validator';
import Boom from '@hapi/Boom';

class GetUsersQuery {

  @IsNumberString()
  page: number;

}

@Controller('/test')
class TestController {
  @Get('/hello')
  async hello(a: any) {
    console.log(a.b);
    return 'Hello Test!';
  }

  @Get('/user/:id')
  async getUser(
    @Params('id') id: number
  ) {
    
    return '当前params中用户id是：' + id;
    // http://localhost:8080/api/v1/test/user/112
  }

  @Get('/user')
  async getUser2(
    @Query() q: {id: number}
  ) {
    return '当前params中用户id是：' + q.id;
    // http://localhost:8080/api/v1/test/user?id=1
  }

  @Post('/user')
  async postUser(
    @Body() body: {
      name: string,
      password: string
    },
    @Header() h: any
  ) {
    console.log(body);
    console.log(h);
    return `当前提交的数据是：${JSON.stringify(body)}`;
  }

  @Get('/users')
  async getUsers(
    @Query() q: GetUsersQuery
  ) {

    // 业务逻辑出现了一些错误，比如用户不存在，用户名已经被注册了
    // if (true) { // 用户名已经被注册了
    //     throw Boom.notFound('注册失败', '用户已经被注册了');
    // }
    return '传过来的query:'+JSON.stringify(q);
  }

}