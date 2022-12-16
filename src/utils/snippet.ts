import { MoviesServiceDto, FilterMoviesDto } from '../movies/dto/movies.dto';

export function filterItems(
  query: FilterMoviesDto,
  data: MoviesServiceDto[],
): MoviesServiceDto[] {
  let filter = data;

  if (query.title) {
    filter = filter.filter(
      (el) => el.title.toLowerCase().indexOf(query.title.toLowerCase()) > -1,
    );
  }

  if (query.location) {
    filter = filter.filter(
      (el) =>
        el.locations &&
        el.locations.toLowerCase().indexOf(query.location.toLowerCase()) > -1,
    );
  }
  if (query.search) {
    filter = filter.filter(
      (el) =>
        el.title.toLowerCase().indexOf(query.search.toLowerCase()) > -1 ||
        (el.locations &&
          el.locations.toLowerCase().indexOf(query.search.toLowerCase()) >
            -1) ||
        (el.director &&
          el.director.toLowerCase().indexOf(query.search.toLowerCase()) > -1) ||
        (el.actor_1 &&
          el.actor_1.toLowerCase().indexOf(query.search.toLowerCase()) > -1) ||
        (el.actor_2 &&
          el.actor_2.toLowerCase().indexOf(query.search.toLowerCase()) > -1) ||
        (el.actor_3 &&
          el.actor_3.toLowerCase().indexOf(query.search.toLowerCase()) > -1),
    );
  }
  return filter;
}
