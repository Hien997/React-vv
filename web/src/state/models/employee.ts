import { Service } from './service';
import { Module } from './module';
import { initUser, User } from './user';

export type Employee = User & {
  employee: EmployeeInfo;
  calendars: EmployeeCalendar[];
  services: Service[];
  modules: Module[];
};

export type EmployeeInfo = {
  user_id: string;
  employee_code: string;
  employee_ssn: string;
  hiring_date: string;
  start_time: string;
  safety_box: string;
  active_avatar: false;
  active_receipt: false;
  open_cashier_drawer: false;
  active_amount: false;
  active_daily_income: false;
  active_booking_appt: false;
  contract_accepted: {
    type: string;
    percent_rate?: string;
    hour_rate?: number;
  };
  payroll_per_check: string;
  paid_tip_by_check: false;
  e_style?: {
    bg?: string;
    color?: string;
  };
  active_full_services: false;
  google_calendar_id: string;
  google_calendar_user: string;
  google_calendar_pwd: string;

  zipcode: string;
  state: string;
  city: string;
  address: string;
};

export const initEmployeeInfo = {
  user_id: '',
  employee_code: '',
  employee_ssn: '',
  hiring_date: '',
  start_time: '',
  safety_box: '',
  active_avatar: false,
  active_receipt: false,
  open_cashier_drawer: false,
  active_amount: false,
  active_daily_income: false,
  active_booking_appt: false,
  contract_accepted: {
    type: '',
    percent_rate: '',
    hour_rate: '',
  },
  payroll_per_check: '',
  paid_tip_by_check: false,
  e_style: {
    bg: '',
    color: '',
  },
  active_full_services: false,
  google_calendar_id: '',
  google_calendar_user: '',
  google_calendar_pwd: '',

  zipcode: '',
  state: '',
  city: '',
  address: '',
};

export type EmployeeCalendar = {
  day_of_week: string;
  start_hour: string;
  end_hour: string;
};

export const initEmployeeCalendar = [0, 1, 2, 3, 4, 5, 6].map((day) => {
  return {
    day_of_week: day,
    start_hour: '',
    end_hour: '',
  };
});

export const initEmployee = {
  ...initUser,
  employee: initEmployeeInfo,
  calendars: initEmployeeCalendar,
  services: [],
  modules: [],
};
