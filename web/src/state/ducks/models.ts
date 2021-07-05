import { Error } from '../api-models/common';

export type BaseState<T> = {
  loading: boolean;
  response?: T;
  errors?: Error[];
};

export const initialState = {};

export interface StateAll {}
