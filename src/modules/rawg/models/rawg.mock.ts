// External.
import { faker } from '@faker-js/faker';

// Local.
import { RAWGServiceResponse } from './rawg.model';

export function generateRAWGServiceResponseMock<T>({
  count = faker.number.int(),
  next,
  previous,
  results = [],
}: Partial<RAWGServiceResponse<T>>) {
  return {
    count,
    next,
    previous,
    results,
  };
}
