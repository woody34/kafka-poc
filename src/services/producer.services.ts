import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Kafka, Producer, ProducerRecord } from "kafkajs";

Injectable()
export class ProducerService implements OnModuleInit, OnModuleDestroy {
  private readonly kafka = new Kafka({
    brokers: ['localhost:9092']
  })
  private readonly producer: Producer = this.kafka.producer()

  async onModuleInit() {
    await this.producer.connect()
  }
  
  async produce(record: ProducerRecord) {
    await this.producer.send(record)
  }
   
  async onModuleDestroy() {
    await this.producer.disconnect()
  }
}