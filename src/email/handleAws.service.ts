import { SESV2 } from "aws-sdk"} from 'aws-sdk/clients/sesv2'

export class AwsService {
  


  sendEmail(){
    const ses = new SESV2()
    ses.sendEmail({
      
    }).promise
  }
 

}