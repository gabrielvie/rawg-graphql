// External.
import { Test, TestingModule } from '@nestjs/testing';

// Local.
import { RAWGEndpoint } from '../rawg/models/rawg.enum';
import { generateRAWGServiceResponseMock } from '../rawg/models/rawg.mock';
import { RAWGService } from '../rawg/rawg.service';
import { GamesArgs } from './dto/games.args';
import { GamesService } from './games.service';
import { generateGameMock } from './models/game.mock';
import { Game } from './models/game.model';
import { Games } from './models/games.model';

describe(GamesService.name, () => {
  let service: GamesService;
  let rawgService: RAWGService;

  beforeEach(async () => {
    const RAWGServiceMock = {
      provide: RAWGService,
      useValue: {
        query: jest.fn(),
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamesService, RAWGServiceMock],
    }).compile();

    service = module.get<GamesService>(GamesService);
    rawgService = module.get<RAWGService>(RAWGService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('::findAll', () => {
    it('should call query method with the correct arguments and return the expected results.', async () => {
      // Arrange.
      const gamesArgs: GamesArgs = {
        page: 1,
        search: 'Grand Theft Auto V',
      };
      const game = generateGameMock({
        id: 1,
        slug: 'grand-theft-auto-v',
        name: 'Grand Theft Auto V',
      });
      const endpoint: RAWGEndpoint = RAWGEndpoint.games;
      const resolvedValueFromAPI = generateRAWGServiceResponseMock<Game>({
        next: 'http://example.com?key=null&page=3',
        previous: 'http://example.com?page=1',
        results: [game],
      });

      const expectedResults: Games = {
        ...resolvedValueFromAPI,
        next: 3,
        previous: 1,
      };

      jest.spyOn(rawgService, 'query').mockResolvedValue(resolvedValueFromAPI);

      // Act.
      const result = await service.findAll(gamesArgs);

      // Assert.
      expect(rawgService.query).toHaveBeenCalledWith(endpoint, gamesArgs);
      expect(result).toStrictEqual(expectedResults);
    });
  });
});
