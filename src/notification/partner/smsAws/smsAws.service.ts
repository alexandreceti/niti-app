import { PartnerInterface } from './../partner.interface';
export class SMSAws implements PartnerInterface {
  sendNotification() {
    console.log('SMS enviado pela AWS');
    return { msg: 'SMS enviado pela AWS' };
  }

  receiveNotification() {
    console.log('SMS receive pela AWS');
    return { msg: 'SMS receive pela AWS' };
  }
}
