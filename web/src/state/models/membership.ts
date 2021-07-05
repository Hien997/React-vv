
export type Membership = {
  id: string,
  store_id: string,
  m_code: string,
  amount: string,
  amount_type: number,
  effective_start: string,
  effective_end: string,
  calculation_point: boolean,
  published: number,
  created_by?: string | null,
  updated_by?: string | null,
  created_at: string,
  updated_at: string,
  deleted_at?: string | null
};
