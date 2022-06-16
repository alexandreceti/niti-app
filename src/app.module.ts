import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationModule } from './notification/notification.module';
import { RabbitModule } from './rabbit/rabbit.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [NotificationModule, RabbitModule, EmailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
