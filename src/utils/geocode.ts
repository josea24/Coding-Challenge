import { geocode } from 'opencage-api-client';
import { MoviesCoordinates, MoviesServiceDto } from '../movies/dto/movies.dto';

export const geoCode = async (
  data: MoviesServiceDto[],
): Promise<MoviesCoordinates[]> => {
  const cord: MoviesCoordinates[] = [];
  for (const movie of data) {
    if (movie.locations != '') {
      const apiResult = await geocode({ q: movie.locations });
      if (apiResult?.results?.length > 0) {
        const geocoded = apiResult.results[0];
        const latitude = geocoded.geometry.lat;
        const longitude = geocoded.geometry.lng;
        cord.push({ latitude, longitude, ...movie });
      }
    }
  }
  return cord;
};
