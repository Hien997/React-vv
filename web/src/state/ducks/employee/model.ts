import { BaseState } from '../models';
import {
  EmployeeListResponse,
  EmployeeDetailResponse,
  EmployeeDeleteResponse,
  EmployeeUpdateResponse,
  EmployeeCreateResponse,
  EmployeeBulkResponse,
  EmployeeImportResponse,
} from '../../api-models/employee';

export type EmployeeDetails = BaseState<EmployeeDetailResponse>;
export type EmployeeList = BaseState<EmployeeListResponse>;
export type EmployeeCreate = BaseState<EmployeeCreateResponse>;
export type EmployeeUpdate = BaseState<EmployeeUpdateResponse>;
export type EmployeeDelete = BaseState<EmployeeDeleteResponse>;
export type EmployeeBulk = BaseState<EmployeeBulkResponse>;
export type EmployeeImport = BaseState<EmployeeImportResponse>;

export type EmployeeState = {
  list: EmployeeList;
  details: EmployeeDetails;
  create: EmployeeCreate;
  update: EmployeeUpdate;
  delete: EmployeeDelete;
  bulk: EmployeeBulk;
  import: EmployeeImport;
};

export const initialEmployeeState: EmployeeState = {
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
    employee: {
      // match to reducer name, each reducer will be one field in state
      employee: EmployeeState;
    };
  }
}
