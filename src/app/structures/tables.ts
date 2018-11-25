import {default as records} from "app/dictionaries/records.json";

export const RecordsTable = [
  {id: 'artist', label: records.artist, sortable: true},
  {id: 'title', label: records.title, sortable: true},
  {id: 'new', label: records.new, sortable: false},
  {id: 'streams', label: records.streams, sortable: true},
  {id: 'progress', label: records.progress, sortable: true}
];