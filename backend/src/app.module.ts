import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    // Loads .env and makes ConfigService available everywhere
    ConfigModule.forRoot({ isGlobal: true }),

    // Basic rate limiting: max 5 requests per minute per IP (anti-spam)
    ThrottlerModule.forRoot([
      {
        ttl: 60_000,
        limit: 5,
      },
    ]),

    ContactModule,
  ],
  providers: [
    // Apply the rate limiter globally
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
