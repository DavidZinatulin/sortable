import * as React from "react";
import { clearRecords, requestRecords } from "app/redux/actions/recordsActions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import Table from "app/components/Table";
import { RecordsTable } from "app/structures/tables";
import { RecordModel, RecordsModel } from "app/models";

interface AppProps extends RecordsModel, RouteComponentProps {
  loadRecords: (
    itemsToLoad?: number,
    previouslyLoaded?: RecordModel[],
    sortBy?: string,
    asc?: boolean
  ) => void;
  clearRecords: () => void;
}

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);

    this.loadMore = this.loadMore.bind(this);
    this.sort = this.sort.bind(this);
  }

  public componentDidMount() {
    this.props.loadRecords();
  }

  private loadMore(sortBy: string, asc: boolean): void {
    this.props.loadRecords(this.props.data.length + 5, this.props.data, sortBy, asc);
  }

  private sort(sortBy: string, asc: boolean): void {
    const itemsToLoad = this.props.data.length;

    this.props.clearRecords();
    this.props.loadRecords(itemsToLoad, [], sortBy, asc);
  }

  public render() {
    return(
      <div className='App'>
        <p>this is the app</p>
        <p>{this.props.location.hash.replace('#', '')}</p>
        <Table
          head={RecordsTable}
          body={this.props.data}
          loading={this.props.loading}
          onLoad={this.loadMore}
          onSort={this.sort}
        />
      </div>

    )
  }
}

const mapStateToProps = state => ({
  ...state.recordsReducer
});

const mapDispatchToProps = dispatch => ({
  loadRecords: (itemsToLoad, previouslyLoaded, sortBy, asc) =>
    dispatch(requestRecords(itemsToLoad, previouslyLoaded, sortBy, asc)),
  clearRecords: () => dispatch(clearRecords())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
