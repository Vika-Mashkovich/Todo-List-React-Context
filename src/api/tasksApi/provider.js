import { converter } from './converter';

class TaskApi {
  constructor({ url }) {
    this.url = url;
  }

  getUrlWithQueries(queries) {
    return `${this.url}?${queries}`;
  }

  getTask() {
    const resultUrl = this.getUrlWithQueries('userId=1');

    return fetch(resultUrl)
      .then((response) => response.json())
      .then((responseData) => converter(responseData))
      .catch(() => []);
  }
}

export default new TaskApi({ url: 'https://jsonplaceholder.typicode.com/todos' });
