// External.
import { faker } from '@faker-js/faker';

// Local.
import { generatePlatformMock } from 'src/modules/platforms/models/platform.mock';
import { GameESRBRatingName, GameESRBRatingSlug } from './game.enum';
import { Game } from './game.model';

export function generateGameMock({
  id = faker.number.int(),
  slug = faker.lorem.slug(),
  name = faker.lorem.words(),
}: Partial<Game>): Game {
  return {
    id,
    slug,
    name,
    playtime: faker.number.int(),
    released: faker.date.past().toISOString(),
    tba: faker.datatype.boolean(),
    background_image: faker.image.url(),
    rating: faker.number.float({ min: 0, max: 10, precision: 0.1 }),
    rating_top: faker.number.int(),
    ratings: [
      {
        id: faker.number.int(),
        title: faker.lorem.words(),
        count: faker.number.int(),
        percent: faker.number.float(),
      },
    ],
    ratings_count: faker.number.int(),
    reviews_text_count: faker.number.int(),
    added: faker.number.int(),
    added_by_status: {
      yet: faker.number.int(),
      owned: faker.number.int(),
      beaten: faker.number.int(),
      toplay: faker.number.int(),
      dropped: faker.number.int(),
      playing: faker.number.int(),
    },
    metacritic: faker.number.float({ min: 0, max: 100 }),
    suggestions_count: faker.number.int(),
    updated: faker.date.recent().toISOString(),
    esrb_rating: {
      id: faker.number.int(),
      slug: faker.helpers.arrayElement(Object.values(GameESRBRatingSlug)),
      name: faker.helpers.arrayElement(Object.values(GameESRBRatingName)),
    },
    platforms: [
      {
        platform: generatePlatformMock({
          id: faker.number.int(),
          slug: faker.lorem.slug(),
          name: faker.lorem.words(),
        }),
        released_at: undefined,
        requirements: {
          minimum: faker.lorem.paragraphs(5),
          recommended: faker.lorem.paragraphs(5),
        },
      },
    ],
  };
}
