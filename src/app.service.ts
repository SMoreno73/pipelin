import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let code = 0;
    return 'Hello World!';
  }
}
