import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { axiosResponseTransformPipe } from '../../utils/response.axio';
import {
  MoviesServiceDto,
  FilterMoviesDto,
  MoviesCoordinates,
} from '../dto/movies.dto';
import { filterItems } from '../../utils/snippet';
import { geoCode } from '../../utils/geocode';

@Injectable()
export class MoviesService {
  constructor(private httpService: HttpService) {}

  public async findMovie(query: FilterMoviesDto): Promise<MoviesServiceDto[]> {
    try {
      const movies = await this.fetchMovie();
      return filterItems(query, movies);
    } catch (error) {
      Logger.error(error);
      throw new HttpException('error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async geocodingMovie(
    query: FilterMoviesDto,
  ): Promise<MoviesCoordinates[]> {
    try {
      const data = await this.findMovie(query);
      return geoCode(data);
    } catch (error) {
      Logger.error(error);
      throw new HttpException('error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  public fetchMovie(): Promise<MoviesServiceDto[]> {
    return firstValueFrom(
      this.httpService.get(process.env.URL).pipe(axiosResponseTransformPipe()),
    );
  }
}
