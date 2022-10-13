import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpExceptionFilter)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log('예외가 발생했어요!');
    console.log('예외내용', message);
    console.log('예외 코드', status);
  }
}

//  implements : catch 함수 안만들면 에러남(안전한 코딩을 할 수 있게 도와줌 )
//  상속은 가지고와서 사용했는데  implements  이안에 있는 내용을 만들주세요
