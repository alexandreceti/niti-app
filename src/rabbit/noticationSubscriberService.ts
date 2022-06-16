import { Injectable } from '@nestjs/common';
import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Notification } from '../notification/entities/notification.entity';
import { rejects } from 'assert';

@Injectable()
export class NoticationSubscriberService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'notification-route',
    queue: 'notification-queue',
  })
  public async pubSubHandler(msg: {}) {
    // const prom = await new Promise((resolve, rejects) =>
    //   setTimeout(() => {
    //     console.log(`Received message: ${JSON.stringify(msg)}`);
    //     return resolve('promise 1 resolved');
    //   }, 3000),
    // );
    console.log(`Received message: ${JSON.stringify(msg)}`);
  }
  public publish(msg: {}): void {
    this.amqpConnection.publish('exchange1', 'notification-route', msg);
  }
}
