import faker from 'faker';
import { Location } from './types';

export class User {
  name: string;
  private coords: Location;
  constructor() {
    this.name = faker.name.firstName();
    this.coords = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  location(): Location {
    return this.coords;
  }
  description(): string {
    return this.name;
  }
}
