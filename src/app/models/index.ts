export interface TableModel {
  data: RecordModel[];
  loading: boolean;
  sorting: boolean;
  sortColumn: number;
}

export interface RecordModel {
  id: number;
  artist: string;
  title: string;
  new: boolean;
  streams: number;
  progress: number;
}