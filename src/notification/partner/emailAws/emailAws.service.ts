import { PartnerInterface } from './../partner.interface';
export class EmailAws implements PartnerInterface {
  private readonly config? = null;

  constructor(options?) {
    this.config = options;
  }

  sendNotification() {
    console.log('Email enviado pela AWS', this.config);
    return { msg: 'Email enviado pela AWS' };
  }

  receiveNotification() {
    console.log('Email receive pela AWS');
    return { msg: 'Email receive pela AWS' };
  }
}
