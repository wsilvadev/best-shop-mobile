import axios, {AxiosInstance} from 'axios';

let api: AxiosInstance | undefined;

function setup(): AxiosInstance {
  if (!api) {
    api = axios.create({
      baseURL: 'http://localhost:3333',
    });
  }
  return api;
}

export default setup;
