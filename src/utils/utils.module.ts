import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from '../config/app.config';
import { EntryMiddleware } from './entry.middleware';

@Module({
  imports: [ConfigModule.forFeature(appConfig)],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(EntryMiddleware).forRoutes('*');
  }
}
