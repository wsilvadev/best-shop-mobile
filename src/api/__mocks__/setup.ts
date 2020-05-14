let api: any | undefined;

function setup(): any {
  if (!api) {
    api = {
      get: jest.fn(),
      post: jest.fn(),
    };
  }

  return api;
}

export default setup;
