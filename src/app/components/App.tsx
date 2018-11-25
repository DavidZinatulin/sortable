import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { RecordsTable } from "app/structures/tables";
import { RecordModel, RecordsModel } from "app/models";
import { clearRecords, requestRecords } from "app/redux/actions/recordsActions";
import Table from "app/components/Table";


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
    this.changeHashOnSort = this.changeHashOnSort.bind(this);
  }

  public componentDidMount() {
    this.props.loadRecords(5, []);
  }

  private changeHashOnSort(sortBy: string, asc: boolean): void {

  }

  public render() {
    return(
      <div className='app'>
        <p>this is the app</p>
        <p>{this.props.location.hash.replace('#', '')}</p>
        <Table
          head={RecordsTable}
          body={this.props.data}
          loading={this.props.loading}
          onLoad={this.props.loadRecords}
          // onSort={this.changeHashOnSort}
          clearBody={this.props.clearRecords}
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
