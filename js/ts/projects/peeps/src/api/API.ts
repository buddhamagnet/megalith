import axios, { AxiosResponse, AxiosPromise } from 'axios';

interface HasID {
  id?: number;
}

export class API<T extends HasID> {
  private url = 'http://localhost:3000';

  constructor(public domain: string = 'users') {}

  fetch = (id: number): AxiosPromise<T> => {
    return axios.get(`${this.url}/${this.domain}/${id}`);
  };

  save(data: T): AxiosPromise<T> {
    let fn: Promise<AxiosResponse>;

    fn = data.id
      ? axios.put(`${this.url}/${this.domain}/${data.id}`, data)
      : axios.post(`${this.url}/${this.domain}`, data);

    return fn;
  }
}
