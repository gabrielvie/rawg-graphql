// External.
import { Test, TestingModule } from '@nestjs/testing';

// Local.
import { RAWGEndpoint } from '../rawg/models/rawg.enum';
import { RAWGService } from '../rawg/rawg.service';
import { GamesArgs } from './dto/games.args';
import { GamesService } from './games.service';
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

  it('should call query method with the correct arguments', async () => {
    // Arrange.
    const gamesArgs: GamesArgs = {
      page: 1,
      search: 'Grand Theft Auto V',
    };
    const endpoint: RAWGEndpoint = RAWGEndpoint.games;
    const expectedResults: Games = {
      count: 2,
      next: null,
      previous: null,
      results: [
        {
          id: 1,
          slug: 'grand-theft-auto-v',
          name: 'Grand Theft Auto V',
        },
      ],
    };

    jest.spyOn(rawgService, 'query').mockResolvedValue(expectedResults);

    // Act.
    const result = await service.findAll(gamesArgs);

    // Assert.
    expect(rawgService.query).toHaveBeenCalledWith(endpoint, gamesArgs);
    expect(result).toStrictEqual(expectedResults);
  });
});
