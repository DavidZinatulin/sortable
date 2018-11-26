import * as React from "react";
import "app/sass/components/Table.scss";
import {default as labels} from "app/dictionaries/global.json";
import { RecordModel, TableState } from "app/models";
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
    const {sortBy, asc} = this.state;

    const { body } = this.props;

    this.props.onLoad(body.length + 5, body, sortBy, asc);
  }

  private handleSort(sortColumn: string, sortable: boolean): void {
    const {sortBy, asc} = this.state;

    const { body, loading, clearBody, onLoad, onSort } = this.props;

    const isAscending = sortColumn === sortBy? !asc: asc;

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
          <a target="_blank" href={value}>{labels.open}</a>
        </span>;

      default:
        return <span>{value}</span>;
    }
  }

  public render() {
    const {head, body, loading} = this.props;

    return (
      <div className="table">
        {head.map((item, key) => (
          <div
            key={key}
            className="table__cell table__cell-head"
            onClick={() => this.handleSort(item.id, item.sortable)}
          >
            {item.label}
          </div>
        ))}

        {body.map((row, rowKey) => (
          <div key={rowKey}>
            {head.map((cell, cellKey) => (
              <div key={cellKey} className="table__cell">
                {Table.formatCell(row[cell.id], cell.format)}
              </div>
            ))}
          </div>
        ))}

        {loading && (<p>loading...</p>)}

        {!loading && <button onClick={this.handleLoad}>{labels.load_more}</button>}
      </div>
    );
  }
}

