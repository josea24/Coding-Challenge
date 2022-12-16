import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { axiosResponseTransformPipe } from '../../utils/axios.response';
import { MoviesServiceDto, FilterMoviesDto } from '../dto/movies.dto';
import { filterItems } from '../../utils/snippet';

@Injectable()
export class MoviesService {
  constructor(private httpService: HttpService) {}

  async findMovie(query: FilterMoviesDto): Promise<MoviesServiceDto[]> {
    const movies = await this.fetchMovie();
    return filterItems(query, movies);
  }

  public fetchMovie(): Promise<MoviesServiceDto[]> {
    return firstValueFrom(
      this.httpService.get(process.env.URL).pipe(axiosResponseTransformPipe()),
    );
  }
}
