export type Location = {
  lat: number;
  lng: number;
};

export interface Mappable {
  location(): Location;
}

export interface Notable {
  description(): string;
}

export type Traceable = Mappable & Notable;
