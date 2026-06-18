import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  // Prefix all routes with /api  ->  POST /api/contact
  app.setGlobalPrefix('api');

  // Validate and strip unknown fields on every request body
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Allow the front-end origins listed in CORS_ORIGINS to call this API
  const origins = (config.get<string>('CORS_ORIGINS') ?? '')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);

  app.enableCors({
    origin: origins.length ? origins : true,
    methods: ['POST', 'GET', 'OPTIONS'],
  });

  const port = config.get<number>('PORT') ?? 3000;
  await app.listen(port);
  Logger.log(`Contact API running on http://localhost:${port}/api`, 'Bootstrap');
}
bootstrap();
