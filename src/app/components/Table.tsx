import * as React from "react";
import "app/sass/components/Table.scss";
import {default as labels} from "app/dictionaries/global.json";
import { RecordModel } from "app/models";
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
  onSort?: (sortBy: string) => void
}

interface State {
  sortBy: string,
  asc: boolean
}

export default class Table extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sortBy: '',
      asc: false
    };

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

    const { body, loading } = this.props;

    if (!sortable || loading) { return }

    let sortOrder = asc;

    if (sortColumn === sortBy) { sortOrder = !sortOrder; }

    this.setState({ sortBy: sortColumn, asc: sortOrder});
    this.props.clearBody();
    this.props.onLoad(body.length , [], sortColumn, sortOrder);
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

