import { ApiProperty } from '@nestjs/swagger';

export class MoviesServiceDto {
  @ApiProperty({
    type: String,
    example: 'Ant-Man and the Wasp',
    required: true,
  })
  title: string;

  @ApiProperty({
    type: Number,
    example: 2018,
    required: true,
  })
  release_year: number;

  @ApiProperty({
    type: String,
    example: 'Jones St btwn Green and Pacific',
    required: true,
  })
  locations: string;

  @ApiProperty({
    type: String,
    example: 'VFX Plate Shots',
    required: true,
  })
  fun_Facts: string;

  @ApiProperty({
    type: String,
    example: 'PYM Particles Productions II, LLC',
    required: true,
  })
  production_company: string;

  @ApiProperty({
    type: String,
    example: 'Michael Ferris Gibson',
    required: true,
  })
  director: string;

  @ApiProperty({
    type: String,
    example: 'Zealot Pictures',
    required: true,
  })
  distributor: string;

  @ApiProperty({
    type: String,
    example: 'Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba',
    required: true,
  })
  writer: string;

  @ApiProperty({
    type: String,
    example: 'Siddarth',
    required: true,
  })
  actor_1: string;

  @ApiProperty({
    type: String,
    example: 'Nithya Menon',
    required: true,
  })
  actor_2: string;

  @ApiProperty({
    type: String,
    example: 'Priya Anand',
    required: true,
  })
  actor_3: string;
}

export class FilterMoviesDto {
  @ApiProperty({
    type: String,
    example: 'Ant-Man and the Wasp',
    required: false,
  })
  title?: string;

  @ApiProperty({
    type: String,
    example: 'Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba',
    required: false,
  })
  location?: string;

  @ApiProperty({
    type: String,
    example: 'Siddarth',
    required: false,
  })
  search?: string;
}

export class MoviesCoordinates {
  @ApiProperty({
    type: Number,
    example: 38.54491,
    required: true,
  })
  latitude: number;

  @ApiProperty({
    type: Number,
    example: -121.74052,
    required: true,
  })
  longitude: number;

  @ApiProperty({
    type: String,
    example: 'Ant-Man and the Wasp',
    required: true,
  })
  title: string;

  @ApiProperty({
    type: Number,
    example: 2018,
    required: false,
  })
  release_year?: number;

  @ApiProperty({
    type: String,
    example: 'Jones St btwn Green and Pacific',
    required: true,
  })
  locations: string;

  @ApiProperty({
    type: String,
    example: 'VFX Plate Shots',
    required: false,
  })
  fun_Facts?: string;

  @ApiProperty({
    type: String,
    example: 'PYM Particles Productions II, LLC',
    required: false,
  })
  production_company?: string;

  @ApiProperty({
    type: String,
    example: 'Michael Ferris Gibson',
    required: false,
  })
  director?: string;

  @ApiProperty({
    type: String,
    example: 'Zealot Pictures',
    required: false,
  })
  distributor?: string;

  @ApiProperty({
    type: String,
    example: 'Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba',
    required: false,
  })
  writer?: string;

  @ApiProperty({
    type: String,
    example: 'Siddarth',
    required: false,
  })
  actor_1?: string;

  @ApiProperty({
    type: String,
    example: 'Nithya Menon',
    required: false,
  })
  actor_2?: string;

  @ApiProperty({
    type: String,
    example: 'Priya Anand',
    required: false,
  })
  actor_3?: string;
}
