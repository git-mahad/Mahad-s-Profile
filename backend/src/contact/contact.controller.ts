import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { SendContactDto } from './dto/send-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async sendMessage(@Body() dto: SendContactDto) {
    // Honeypot: if a bot filled the hidden field, pretend success and drop it.
    if (dto.botcheck && dto.botcheck.trim() !== '') {
      throw new BadRequestException('Spam detected.');
    }

    await this.contactService.sendContactEmail(dto);

    return { success: true, message: 'Your message has been sent. Thank you!' };
  }
}
