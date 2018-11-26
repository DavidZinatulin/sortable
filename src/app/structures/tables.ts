import {default as records} from "app/dictionaries/recordsDictionary.json";

export const RecordsTable = [
  {id: 'artist', label: records.artist, sortable: true},
  {id: 'title', label: records.title, sortable: true},
  {id: 'new', label: records.new, sortable: false, format: 'replace-boolean'},
  {id: 'streams', label: records.streams, sortable: true, format: 'round'},
  {id: 'progress', label: records.progress, sortable: true, format: 'signum'},
  {id: 'link', label: records.link, sortable: false, format: 'link'},
];