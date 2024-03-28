import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { generate } from 'rxjs';
import { json } from 'stream/consumers';
@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);
    return messages[id];
  }
  async findAll() {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);
    return messages;
  }
  async create(contents: string) {
    const content = await readFile('messages.json', 'utf8');
    // const messages = JSON.parse(content);
    const messages = content ? JSON.parse(content) : {};
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, contents };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
