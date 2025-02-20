import { BaseEntity } from '../base';

export type User = BaseEntity & {
  email: string;
  name: string;
};
