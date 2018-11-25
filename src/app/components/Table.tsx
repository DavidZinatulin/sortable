import * as React from "react";
import "app/sass/components/Table.scss";
import {default as labels} from "app/dictionaries/global.json";

interface Props {
  head: any[],
  body: any[],
  loading: boolean,
  onLoad: (sortBy: string, asc: boolean) => void
  onSort: (sortBy: string, asc: boolean) => void
};

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

  private handleLoad() {
    const {sortBy, asc} = this.state;
    this.props.onLoad(sortBy, asc);
  }

  private handleSort(sortBy: string, sortable: boolean) {
    if (!sortable) { return }

    let sortOrder = this.state.asc;

    if (sortBy === this.state.sortBy) { sortOrder = !sortOrder; }

    this.setState({ sortBy, asc: sortOrder});
    this.props.onSort(sortBy, sortOrder);
  }

  public render() {
    const {head, body, loading} = this.props;

    return (
      <div className="table">
        {head.map((item, key) => (
          <div
            key={key}
            className="table__cell table_cell-head"
            onClick={() => this.handleSort(item.id, item.sortable)}
          >
            {item.label}
          </div>
        ))}

        {body.map((row, rowKey) => (
          <div key={rowKey}>
            {head.map((cell, cellKey) => (
              <div key={cellKey} className="table__cell">{row[cell.id]}</div>
            ))}
          </div>
        ))}

        {loading && (<p>loading...</p>)}

        {!loading && <button onClick={this.handleLoad}>{labels.load_more}</button>}
      </div>
    );
  }
}

