import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export function createdDocument(app: INestApplication): OpenAPIObject {
  const config = new DocumentBuilder()
    .setTitle('Coding Challenge')
    .setVersion('1.0')
    .addTag('Coding Challenge')
    .addServer(`http://localhost:${process.env.PORT}`, 'Local')
    .build();

  return SwaggerModule.createDocument(app, config);
}
