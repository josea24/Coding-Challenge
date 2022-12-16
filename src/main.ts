import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { createdDocument } from './swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('swagger', app, createdDocument(app), {
    explorer: true,
    swaggerOptions: { filter: true, showRequestDuration: true },
  });

  const configService = app.get(ConfigService);

  const PORT = configService.get<number>('config.app.port');

  const ENV = configService.get<string>('config.environment');

  await app.listen(PORT, () => {
    Logger.log({
      message: `app listening at ${PORT} in ${ENV}`,
    });
  });
}

bootstrap();
