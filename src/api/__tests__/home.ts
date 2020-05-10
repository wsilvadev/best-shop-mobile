import {getShops} from '../home';
import apiSetup from '../setup';

jest.mock('../setup');

describe('Testing home APIs', () => {
  let get: jest.Mock;
  const headers = {foo: 'bar'};
  let skipCount = 0;

  beforeEach(() => {
    get = apiSetup().get as jest.Mock;
  });

  afterEach(() => {
    get.mockClear();
  });
  describe('getShops test', () => {
    beforeEach(() => {
      get.mockReturnValue({
        data: {
          result: {
            items: [],
            totalCount: 0,
          },
        },
      });
    });

    it('gets the empty shops from api', async () => {
      const data = await getShops(headers, skipCount);

      console.log(JSON.stringify(data));

      expect(data?.result?.items).toEqual([]);
      expect(data?.result?.totalCount).toBe(skipCount);
      expect(get).toHaveBeenCalledTimes(1);
      expect(get).toHaveBeenCalledWith('/shops?pages=0', {headers});
    });
  });
});
