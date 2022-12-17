import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { HttpException } from '@nestjs/common';
import { MoviesService } from './movies.service';

export const httpResponseMock = {
  data: [
    {
      title: 'Ant-Man and the Wasp',
      release_year: '2018',
      locations: 'Vallejo St btwn Montgomery and Davis',
      fun_facts: 'Stunt scene involving weaving car',
      production_company: 'PYM Particles Productions II, LLC',
      distributor: 'Walt Disney Studios Motion Pictures',
      director: 'Peyton Reed',
      writer: 'Chris McKenna',
      actor_1: 'Paul Rudd',
      actor_2: 'Evangeline Lilly',
      actor_3: 'Michael Douglas',
    },
  ],
  headers: {},
  config: { url: 'http://localhost:3000/mockUrl' },
  status: 200,
  statusText: 'OK',
};

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    service = new MoviesService(HttpService.prototype);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getMovies', () => {
    it('Get Movies ', async () => {
      jest
        .spyOn(HttpService.prototype, 'get')
        .mockImplementationOnce(() => of(httpResponseMock));
      const result = await service.fetchMovie();
      expect(result).toBeDefined();
    });
  });
  describe('findMovie', () => {
    it('Get Movies by filter', async () => {
      jest
        .spyOn(HttpService.prototype, 'get')
        .mockImplementationOnce(() => of(httpResponseMock));
      const result = await service.findMovie({ title: 'Ant-Man and the Wasp' });
      expect(result).toBeDefined();
    });
    it('return error', async () => {
      const result = service.findMovie({ title: 'Ant-Man and the Wasp' });
      await expect(result).rejects.toBeInstanceOf(HttpException);
    });
  });
  describe('geocodingMovie', () => {
    it('Get Movies and cord', async () => {
      jest
        .spyOn(HttpService.prototype, 'get')
        .mockImplementationOnce(() => of(httpResponseMock));
      const result = await service.geocodingMovie({
        title: 'Ant-Man and the Wasp',
      });
      expect(result).toBeDefined();
    });
    it('return error', async () => {
      const result = service.findMovie({ title: 'Ant-Man and the Wasp' });
      await expect(result).rejects.toBeInstanceOf(HttpException);
    });
  });
});
