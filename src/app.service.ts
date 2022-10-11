import { Injectable } from '@nestjs/common';
import { ProducerService } from './services/producer.services';

@Injectable()
export class AppService {
  constructor(
    private readonly producerService: ProducerService
  ) {

  }
  async getHello() {
    await this.producerService.produce({
      topic: 'do-thing',
      messages: [
        {
          value: 'This is a test'
        }
      ]
    })
  }
}
