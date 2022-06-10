import { PartnerInterface } from '../partner/partner.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificationDto } from '../dto/create-notification.dto';
import { UpdateNotificationDto } from '../dto/update-notification.dto';
import * as partners from '../partner';

@Injectable()
export class NotificationService {
  send(createNotificationDto: CreateNotificationDto) {
    const service = this.partnerLoard('EmailAws', { service: 'assws' });
    service.sendNotification();
    return { msg: 'This action returns all notification' };
  }

  receiver() {
    return { msg: 'This action returns all notification' };
  }

  partnerLoard(partner: string, options?: any): PartnerInterface {
    try {
      console.log(partners);
      console.log(partners[partner]);
      const service = partners[partner];
      if (!service) throw new Error('Partner module not exists');
      return new service(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
