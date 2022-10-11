import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopics, Kafka, Producer } from "kafkajs";

Injectable()
export class ConsumerService implements OnModuleInit, OnModuleDestroy {
  private readonly kafka = new Kafka({
    brokers: ['localhost:9092']
  })
  private readonly consumers: Consumer[] = []

  async onModuleInit() {

  }

  async consume(topic: ConsumerSubscribeTopics, config: ConsumerRunConfig) {
    const consumer = this.kafka.consumer({ groupId: 'kafka-app' })
    await consumer.connect()
    await consumer.subscribe(topic)
    await consumer.run(config)
    this.consumers.push(consumer)
  }

  async onModuleDestroy() {
    for (const consumer of this.consumers) {
      await consumer.disconnect()
    }
  }
}