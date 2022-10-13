import {
  ConflictException,
  HttpException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IamportService {
  async getToken() {
    try {
      const result = await axios.post('https://api.iamport.kr/users/getToken', {
        imp_key: process.env.IMPORT_KEY,
        imp_secret: process.env.IMPORT_SECRET,
      });
      return result.data.response.access_token;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.response.date.massage, e.response.date.status);
    }
    // impUid 가 1번만 존재해야 합니다.(중복체크결제)
  }

  async checkPaid({ impUid, token }) {
    try {
      const result = await axios.get(
        `https://api.iamport.kr/users/payments/${impUid}`,
        {
          headers: { Authorization: token },
        },
      );
      if (result.data.response.status !== 'paid') {
        throw new ConflictException('결제 내역이 존재하지 않습니다.');
      }
      if (result.data.response.amount !== amount) {
        throw new UnprocessableEntityException('결제 금액이 잘못되었습니다.');
      }
      console.log(result.data.response.amount);
      console.log(result.data.response.paid);

      //   return result;
    } catch (e) {
      console.log(e);
      throw new HttpException(e.response.date.massage, e.response.date.status);
    }
  }
}
