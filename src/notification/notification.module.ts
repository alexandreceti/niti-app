import { NoticationSubscriberService } from './../rabbit/noticationSubscriberService';
import { Module, Controller } from '@nestjs/common';
import { NotificationService } from './service/notification.service';
import { NotificationController } from './controller/notification.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitModule } from './../rabbit/rabbit.module';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  imports: [
    ClientsModule.register([
      {
        name: 'NOTI_SERVICE',
        transport: Transport.RMQ,

        options: {
          urls: ['amqp://sabrina:sabrina@localhost:5672'],
          queue: 'noti_queue',
          noAck: true,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
    RabbitModule,
  ],
})
export class NotificationModule {}
