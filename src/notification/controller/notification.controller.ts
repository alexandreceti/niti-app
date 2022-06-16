import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { NotificationService } from '../service/notification.service';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { UpdateNotificationDto } from '../dto/update-notification.dto';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Controller('notification')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService, // @Inject('NOTI_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    // this.client.send('hello', JSON.stringify(createNotificationDto));

    return this.notificationService.send(createNotificationDto);
  }

  @Get()
  findAll() {
    return this.notificationService.receiver();
  }

  // @EventPattern('notif-creaded')
  // async handleNotifCreaded(data: Record<string, unknown>) {}
}
