import { HttpModule } from '@nestjs/axios';
import { forwardRef, Module } from '@nestjs/common';
import { AppModule } from '../app.module';
import { MoviesService } from './services/movies.service';
import { MoviesController } from './controllers/movies.controller';

@Module({
  providers: [MoviesService],
  imports: [HttpModule, forwardRef(() => AppModule)],

  controllers: [MoviesController],
})
export class MoviesModule {}
