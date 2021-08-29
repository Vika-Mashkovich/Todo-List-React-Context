import { converter } from './converter';

class TaskApi {
  constructor({ url, token }) {
    this.url = url;
    this.token = token;
  }

  getUrlWithQueries(queries) {
    return `${this.url}?${queries}`;
  }

  getTask() {
    const resultUrl = this.getUrlWithQueries('userId=1');

    return fetch(resultUrl)
      .then((response) => response.json())
      .then((responseData) => converter(responseData));
    // .catch(console.log());
  }
}

export default new TaskApi({ url: 'https://jsonplaceholder.typicode.com/todos' });
