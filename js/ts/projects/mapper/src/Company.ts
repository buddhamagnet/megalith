import faker from 'faker';
import { Location, Mappable } from './types';

export class Company {
  name: string;
  catchphrase: string;
  coords: Location;
  constructor() {
    this.name = faker.company.companyName();
    this.catchphrase = faker.company.catchPhrase();
    this.coords = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  location(): Location {
    return this.coords;
  }
  description(): string {
    return `${this.name} - ${this.catchphrase}`;
  }
}
