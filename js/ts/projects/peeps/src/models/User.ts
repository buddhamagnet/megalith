import { AxiosResponse } from 'axios';
import { Events } from '../events/Events';
import { API } from '../api/API';
import { Attributes } from './Attributes';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events = new Events();
  private api = new API<UserProps>('users');
  private attrs: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attrs = new Attributes<UserProps>(attrs);
  }

  getID(): number {
    return this.attrs.data.id;
  }

  get get() {
    return this.attrs.get;
  }

  set(props: UserProps): void {
    this.attrs.set(props);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.getID();
    if (id) {
      this.api
        .fetch(this.getID())
        .then((response: AxiosResponse): void => this.set(response.data))
        .catch((e) => console.log(e.message));
    } else {
      console.log('no ID');
    }
  }

  save(): void {
    this.api
      .save(this.attrs.getAll())
      .then((response: AxiosResponse): void => this.set(response.data))
      .catch((e) => console.log(e.message));
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}
