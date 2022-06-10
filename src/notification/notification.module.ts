import { Module, Controller } from '@nestjs/common';
import { NotificationService } from './service/notification.service';
import { NotificationController } from './controller/notification.controller';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  imports: [],
})
export class NotificationModule {}
