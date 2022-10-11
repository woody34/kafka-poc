import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumerService } from './services/consomer.service';
import { DoThingConsumer } from './services/do-thing.consumer';
import { ProducerService } from './services/producer.services';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProducerService, ConsumerService, DoThingConsumer],
})
export class AppModule {}
