import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { Controller, Get, HttpStatus, Param, Query } from '@nestjs/common';
import { MoviesService } from '../services/movies.service';
import { MoviesServiceDto } from '../dto/movies.dto';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @ApiResponse({
    status: HttpStatus.OK,
    type: MoviesServiceDto,
    description: 'return movies in San Francisco',
  })
  @ApiOperation({
    summary: 'Get all movies',
    description: 'Get all movies in San Francisco',
  })
  @Get('all')
  private getMovies(): Promise<MoviesServiceDto[]> {
    return this.moviesService.fetchMovie();
  }

  @ApiResponse({
    status: HttpStatus.OK,
    type: MoviesServiceDto,
    description: 'return movie',
  })
  @ApiOperation({
    summary: 'return movie by title',
    description: 'Get movie by title',
  })
  @ApiParam({
    name: 'title',
    type: String,
    required: false,
    example: 'Ant-Man and the Wasp',
  })
  @ApiQuery({
    name: 'location',
    type: String,
    required: false,
    example: 'Vallejo St btwn Montgomery and Davis',
  })
  @ApiQuery({
    name: 'search',
    type: String,
    required: false,
    example: 'Paul Rudd',
  })
  @Get('find/:title')
  private getOneMovieByTitle(
    @Param('title') title: string,
    @Query('location') location: string,
    @Query('search') search: string,
  ): Promise<MoviesServiceDto[]> {
    return this.moviesService.findMovie({ title, location, search });
  }
}
