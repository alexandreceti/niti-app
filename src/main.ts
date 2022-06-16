import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: ['amqp://sabrina:sabrina@localhost:5672'],
  //     queue: 'noti_queue',
  //     noAck: true,
  //     queueOptions: {
  //       durable: false,
  //       replyQueue: true,
  //     },
  //   },
  // });
  // await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
