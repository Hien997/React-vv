export type SoftDelete = {
  deleted_at?: string;
};

export type Timestamp = {
  created_by?: string;
  updated_by?: string;
  created_at: string;
  updated_at: string;
};
