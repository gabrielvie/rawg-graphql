// External.
import { faker } from '@faker-js/faker';

// Local.
import { Games } from './games.model';

export function generateGamesMock({
  next = faker.number.int(),
  previous = faker.number.int(),
  results = [],
}: Partial<Games>): Games {
  return {
    count: results.length,
    next,
    previous,
    results,
  };
}
