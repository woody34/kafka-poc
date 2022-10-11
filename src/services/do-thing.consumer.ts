import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConsumerService } from "./consomer.service";

@Injectable()
export class DoThingConsumer implements OnModuleInit {
  constructor(
    private readonly consumerService: ConsumerService
  ) {}

  async onModuleInit() {
    await this.consumerService.consume({ topics: ['do-thing'] }, {
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value,
          topic: topic.toString(),
          partition: partition.toString()
        })
      }
    })
  }
}