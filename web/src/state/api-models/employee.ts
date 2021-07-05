import { Pagination } from 'reactstrap';
import {
  CommonRequest,
  CommonResponse,
  SearchRequest,
  BulkRequest,
  ImportFailureRow,
} from './common';
import { Employee } from '../models/employee';

export type EmployeeListRequest = (SearchRequest & {}) | undefined;
export type EmployeeListResponse = CommonResponse & {
  data?: {
    users: Employee[];
    pagination: Pagination;
  };
};

export type EmployeeDetailRequest = CommonRequest & {};
export type EmployeeDetailResponse = CommonResponse & {
  data?: Employee;
};

export type EmployeeCreateRequest = CommonRequest & {};
export type EmployeeCreateResponse = CommonResponse & {
  data?: Employee;
};

export type EmployeeUpdateRequest = CommonRequest & {};
export type EmployeeUpdateResponse = CommonResponse & {
  data?: Employee;
};

export type EmployeeDeleteRequest = CommonRequest & { id: string };
export type EmployeeDeleteResponse = CommonResponse & {};

export type EmployeeBulkRequest = BulkRequest & {};
export type EmployeeBulkResponse = CommonResponse & {};

export type EmployeeImportResponse = CommonResponse & {
  data?: {
    failures?: ImportFailureRow[];
  };
};

export type EmployeeImportRequest = CommonRequest & {
  file: File;
};
