// External.
import { faker } from '@faker-js/faker';

// Local.
import { Platform } from './platform.model';

export function generatePlatformMock({
  id = faker.number.int(),
  slug = faker.lorem.slug(),
  name = faker.lorem.words(),
}: Partial<Platform>): Platform {
  const year_start = faker.number.int({ min: 1990, max: 2030 });
  const year_end = faker.datatype.boolean()
    ? faker.number.int({ min: year_start, max: 2030 })
    : undefined;

  return {
    id,
    slug,
    name,
    games_count: faker.number.int(),
    image_background: faker.image.url(),
    image: faker.datatype.boolean() ? faker.image.url() : undefined,
    year_start: year_start,
    year_end: year_end,
  };
}
