import {default as labels} from "assets/dictionaries/recordsDictionary.json";

export const RecordsTable = [
  {id: 'artist', label: labels.artist, sortable: true},
  {id: 'title', label: labels.title, sortable: true},
  {id: 'new', label: labels.new, sortable: false, format: 'replace-boolean'},
  {id: 'streams', label: labels.streams, sortable: true, format: 'round'},
  {id: 'progress', label: labels.progress, sortable: true, format: 'signum'},
  {id: 'link', label: labels.link, sortable: false, format: 'link'},
];