import Moment from 'moment';

export type KeyAccessor = {
  [key: string]: any;
}

export type Client = {
    name: string;
    admin_email: string;
    admin_password: string;
};

export type BrewhopsCookie = {
  id: string;
  username: string;
  admin: boolean;
  token: string;
};