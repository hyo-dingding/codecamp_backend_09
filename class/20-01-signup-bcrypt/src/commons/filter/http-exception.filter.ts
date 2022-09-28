import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log('===========================');
    console.log('예외가 발생했어요!!');
    console.log('예외내용', message);
    console.log('예외코드', status);
    console.log('===========================');
  }
}

// catch(exception: HttpException, argumentsHost: ArgumentsHost)
//  argumentsHost: ArgumentsHost
// export class HttpExceptionFilter implements(구현) ExceptionFilter
// implements ExceptionFilter 안에 설명서가 다 들어있어서 catch 함수를 반드시 만들어야함.(안전하게 코딩할수있음.)
//  implements : 이안에 있는 것 그대로 만들어주세요 (상속과 다름)
