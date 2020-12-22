import { User } from './models/User';

const user = new User({ id: 1 });
user.on('change', () => console.log('Something changed', user));
user.fetch();
user.set({ name: 'roxy', age: 5 });
user.save();
