// External.
import { Test, TestingModule } from '@nestjs/testing';

// Local.
import { GamesArgs } from './dto/games.args';
import { GamesResolver } from './games.resolver';
import { GamesService } from './games.service';
import { generateGameMock } from './models/game.mock';
import { generateGamesMock } from './models/games.mock';

describe(GamesResolver.name, () => {
  let resolver: GamesResolver;
  let gamesService: GamesService;

  beforeEach(async () => {
    const GamesServiceMock = {
      provide: GamesService,
      useValue: {
        findAll: jest.fn(),
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamesResolver, GamesServiceMock],
    }).compile();

    resolver = module.get<GamesResolver>(GamesResolver);
    gamesService = module.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('::games', () => {
    it('should call ::findAll method from GamesService with the correct arguments', async () => {
      // Arrange.
      const args: GamesArgs = { page: 1, search: 'Grand Theft Auto V' };
      const game = generateGameMock({
        id: 1,
        slug: 'grand-theft-auto-v',
        name: 'Grand Theft Auto V',
      });
      const expectedResults = generateGamesMock({
        next: 3,
        previous: 1,
        results: [game],
      });

      jest.spyOn(gamesService, 'findAll').mockResolvedValue(expectedResults);

      // Act.
      const result = await resolver.games(args);

      // Assert.
      expect(gamesService.findAll).toHaveBeenCalledWith(args);

      expect(result).toStrictEqual(expectedResults);
    });
  });
});
