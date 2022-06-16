import { NoticationSubscriberService } from './noticationSubscriberService';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange1',
          type: 'topic',
        },
      ],
      uri: 'amqp://sabrina:sabrina@localhost:5672',
      channels: {
        'channel-1': {
          prefetchCount: 3000,
          default: true,
        },
        'channel-2': {
          prefetchCount: 2,
        },
      },
    }),
    RabbitModule,
  ],
  controllers: [],
  providers: [NoticationSubscriberService],
  exports: [NoticationSubscriberService],
})
export class RabbitModule {}
