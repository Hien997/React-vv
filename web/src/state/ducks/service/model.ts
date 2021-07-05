import { BaseState } from '../models';
import {
  ServiceBulkResponse,
  ServiceCreateResponse,
  ServiceDeleteResponse,
  ServiceDetailResponse,
  ServiceListResponse,
  ServiceUpdateResponse,
  ServiceImportResponse
} from '../../api-models/service';

export type ServiceDetails = BaseState<ServiceDetailResponse>;
export type ServiceList = BaseState<ServiceListResponse>;
export type ServiceCreate = BaseState<ServiceCreateResponse>;
export type ServiceUpdate = BaseState<ServiceUpdateResponse>;
export type ServiceDelete = BaseState<ServiceDeleteResponse>;
export type ServiceBulk = BaseState<ServiceBulkResponse>;
export type ServiceImport = BaseState<ServiceImportResponse>;


export type ServiceState = {
  list: ServiceList;
  details: ServiceDetails;
  create: ServiceCreate;
  update: ServiceUpdate;
  delete: ServiceDelete;
  bulk: ServiceBulk;
  import: ServiceImport
};

export const initialServiceState = {
  list: { loading: false, response: undefined },
  details: { loading: false, response: undefined },
  create: { loading: false, response: undefined },
  update: { loading: false, response: undefined },
  delete: { loading: false, response: undefined },
  bulk: { loading: false, response: undefined },
  import: { loading: false, response: undefined },
};

declare module './../models' {
  interface StateAll {
    // match to a duck folder
    service: {
      // match to reducer name, each reducer will be one field in state
      service: ServiceState;
    };
  }
}
