import { Controller, Get } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @EventPattern('hello')
  // async hello(data: string) {
  //   console.log('--Log hello---');
  //   const info = JSON.parse(data);
  //   console.log(info);
  // }

  // @MessagePattern('hello')
  // getNoti(@Payload() data: string, @Ctx() context: RmqContext) {
  //   console.log(`Pattern: ${context.getPattern()}`);
  //   const temp = JSON.parse(data);
  //   console.log(`Data: ${JSON.stringify(temp)}`);
  // }
}
