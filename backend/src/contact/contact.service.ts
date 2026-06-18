import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { SendContactDto } from './dto/send-contact.dto';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private readonly transporter: nodemailer.Transporter;

  constructor(private readonly config: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.config.get<string>('SMTP_HOST'),
      port: Number(this.config.get<string>('SMTP_PORT') ?? 465),
      secure: this.config.get<string>('SMTP_SECURE') === 'true',
      auth: {
        user: this.config.get<string>('SMTP_USER'),
        pass: this.config.get<string>('SMTP_PASS'),
      },
    });
  }

  async sendContactEmail(dto: SendContactDto): Promise<void> {
    const { name, email, subject, message } = dto;

    const to = this.config.get<string>('MAIL_TO');
    const from =
      this.config.get<string>('MAIL_FROM') ??
      this.config.get<string>('SMTP_USER');

    try {
      await this.transporter.sendMail({
        from, // authenticated sender (your Gmail)
        to, // your inbox
        replyTo: `"${name}" <${email}>`, // so you can reply straight to the visitor
        subject: `[Portfolio] ${subject}`,
        text:
          `New message from your portfolio contact form\n\n` +
          `Name:    ${name}\n` +
          `Email:   ${email}\n` +
          `Subject: ${subject}\n\n` +
          `Message:\n${message}\n`,
        html: this.buildHtml(name, email, subject, message),
      });

      this.logger.log(`Contact email sent (from ${email})`);
    } catch (err) {
      this.logger.error('Failed to send contact email', err as Error);
      throw new InternalServerErrorException(
        'Could not send your message right now. Please try again later.',
      );
    }
  }

  private escape(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  private buildHtml(
    name: string,
    email: string,
    subject: string,
    message: string,
  ): string {
    return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;
                  border: 1px solid #e6e6e6; border-radius: 8px; overflow: hidden;">
        <div style="background: #149ddd; color: #fff; padding: 16px 24px;">
          <h2 style="margin: 0; font-size: 18px;">New Portfolio Message</h2>
        </div>
        <div style="padding: 24px; color: #272829;">
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${this.escape(name)}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong>
            <a href="mailto:${this.escape(email)}">${this.escape(email)}</a></p>
          <p style="margin: 0 0 16px;"><strong>Subject:</strong> ${this.escape(subject)}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <p style="white-space: pre-wrap; line-height: 1.6;">${this.escape(message)}</p>
        </div>
      </div>`;
  }
}
