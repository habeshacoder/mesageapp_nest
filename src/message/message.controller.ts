import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Headers,
  Query,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('message')
export class MessageController {
  constructor(public messageServ: MessagesService) {}
  @Get(':id')
  getMessages(@Param('id') id: string) {
    return this.messageServ.findOne(id);
  }
  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log(body);
    return this.messageServ.create(body.content);
  }
  @Get()
  allMessages(@Query() query: any) {
    return this.messageServ.findAll();
  }
}
