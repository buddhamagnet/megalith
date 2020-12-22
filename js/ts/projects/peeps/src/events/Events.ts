import { Callback } from '../types';

export class Events {
  public eventMap: { [key: string]: Callback[] } = {};

  // These are proxied via accessors on the callers, so
  // switch to arrow function to prevent this being orphaned.
  on = (event: string, callback: Callback): void => {
    if (!this.eventMap[event]) this.eventMap[event] = [];
    this.eventMap[event].push(callback);
  };

  // These are proxied via accessors on the callers, so
  // switch to arrow function to prevent this being orphaned.
  trigger = (event: string): void => {
    this.eventMap[event] && this.eventMap[event].forEach((cb) => cb());
  };
}
