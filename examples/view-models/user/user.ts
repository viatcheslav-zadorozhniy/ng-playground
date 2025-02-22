import { BaseEntity } from '../common';

export type User = BaseEntity & {
  age: number;
  email: string;
};
