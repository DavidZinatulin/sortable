// export type Id = number | string;

export interface RecordsModel {
  data: RecordModel[];
  loading: boolean;
}

export interface RecordModel {
  id: number;
  artist: string;
  title: string;
  new: boolean;
  streams: number;
  progress: number;
  link: string;
}

export interface TableState {
  sortBy: string,
  asc: boolean
}