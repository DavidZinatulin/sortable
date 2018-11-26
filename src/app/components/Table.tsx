import * as React from "react";
import { default as MuiTable } from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableSortLabel from "@material-ui/core/es/TableSortLabel/TableSortLabel";
import CircularProgress from "@material-ui/core/es/CircularProgress/CircularProgress";
import Button from "@material-ui/core/es/Button/Button";
import "app/sass/components/Table.scss";
import {default as labels} from "app/dictionaries/globalDictionary.json";
import { RecordModel, TableState } from "app/models";
import { LINES_TO_LOAD } from "app/utils/constants";
import { detectSignum } from "app/utils/helpers";


interface Props {
  head: any[],
  body: any[],
  loading: boolean,
  onLoad: (
    itemsToLoad?: number,
    previouslyLoaded?: RecordModel[],
    sortBy?: string,
    asc?: boolean
  ) => void,
  clearBody: () => void,
  onSort?: (sortBy: string, asc: boolean) => void,
  defaultState?: TableState
}

export default class Table extends React.Component<Props, TableState> {
  constructor(props: Props) {
    super(props);

    const state = {
      sortBy: '',
      asc: false
    };

    this.state = props.defaultState? props.defaultState: state;
    this.handleSort = this.handleSort.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }

  private handleLoad(): void {
    const {sortBy, asc} = this.state,
          { body } = this.props;

    this.props.onLoad(body.length + LINES_TO_LOAD, body, sortBy, asc);
  }

  private handleSort(sortColumn: string, sortable: boolean): void {
    const {sortBy, asc} = this.state,
          { body, loading, clearBody, onLoad, onSort } = this.props,
          isAscending = sortColumn === sortBy? !asc: asc;

    if (!sortable || loading) { return }

    this.setState({ sortBy: sortColumn, asc: isAscending});
    clearBody();
    onLoad(body.length , [], sortColumn, isAscending);
    onSort && onSort(sortColumn, isAscending);
  }

  private static formatCell(value: any, formatType: string): JSX.Element {
    switch (formatType) {
      case 'round':
        return <span>{Math.round(value)}</span>;

      case 'signum':
        const className = detectSignum(value);
        return <span className={`color-${className}`}>{value}</span>;

      case 'replace-boolean':
        return <span>{value? labels.bool_true: labels.bool_false}</span>;

      case 'link':
        return <span>
          <Button variant="outlined" target="_blank" href={value}>
            {labels.open}
          </Button>
        </span>;

      default:
        return <span>{value}</span>;
    }
  }

  public render() {
    const { head, loading, body } = this.props,
          { sortBy, asc } = this.state;

    const cellWidth = `${100/head.length}%`;

    const tableHead = (
      <TableHead>
        <TableRow>
          {head.map((item, key) => (
            <TableCell key={key} style={{width: cellWidth}}>
              <TableSortLabel
                active={sortBy === item.id}
                direction={asc? 'asc': 'desc'}
                onClick={() => this.handleSort(item.id, item.sortable)}
              >
                {item.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );

    const tableBody = (
      <TableBody>
        {body.map((row, rowKey) => (
          <TableRow key={rowKey}>
            {head.map((cell, cellKey) => (
              <TableCell key={cellKey} style={{width: cellWidth}}>
                {Table.formatCell(row[cell.id], cell.format)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    );

    const loadButton = (
      <div className="table__load-button-container">
        {loading?
          <CircularProgress />
          :
          <Button variant="contained" color="primary" onClick={this.handleLoad}>
            {labels.load_more}
          </Button>
        }
      </div>
    );

    return (
      <div className="table">
        <MuiTable>
          {tableHead}
          {tableBody}
        </MuiTable>
        {loadButton}
      </div>
    );
  }
}

