import axios from 'axios';

import setup from '../setup';

jest.mock('axios');

describe('testing api', () => {
  const axiosCreator = axios.create as jest.Mock;

  beforeEach(() => {
    axiosCreator.mockReturnValue({get: jest.fn(), post: jest.fn()});
  });

  afterEach(axiosCreator.mockClear);

  it('create axios', async () => {
    setup();
    setup();
    setup();
    setup();

    expect(axiosCreator).toHaveBeenCalledWith({
      baseURL: 'http://localhost:3333',
    });
    expect(axiosCreator).toHaveBeenCalledTimes(1);
  });
});
