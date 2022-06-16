import { NoticationSubscriberService } from './../../rabbit/noticationSubscriberService';
import { PartnerInterface } from '../partner/partner.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { UpdateNotificationDto } from '../dto/update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    private readonly noticationSubscriberService: NoticationSubscriberService,
  ) {}

  send(createNotificationDto: CreateNotificationDto) {
    this.noticationSubscriberService.publish(createNotificationDto);
    return { msg: 'This action returns all notification' };
  }

  receiver() {
    return { msg: 'This action returns all notification' };
  }
}
