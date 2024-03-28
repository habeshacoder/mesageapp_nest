import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Module({
  controllers: [MessageController],
  providers: [MessagesRepository, MessagesService],
})
export class MessageModule {}
