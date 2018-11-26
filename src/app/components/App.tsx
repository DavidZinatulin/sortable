import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import * as queryString from "querystring";
import { RecordsTable } from "app/structures/tables";
import { RecordModel, RecordsModel, TableState } from "app/models";
import { clearRecords, requestRecords } from "app/redux/actions/recordsActions";
import Table from "app/components/Table";
import { LINES_TO_LOAD } from "app/utils/constants";


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
  private defaultSorting: TableState = this.checkUrl();

  constructor(props: AppProps) {
    super(props);
    this.changeUrlOnSort = this.changeUrlOnSort.bind(this);
  }

  public componentDidMount() {
    const {sortBy, asc} = this.defaultSorting;

    this.props.loadRecords(LINES_TO_LOAD, [], sortBy, asc);
  }

  private changeUrlOnSort(sortBy: string, asc: boolean): void {
    this.props.history.push(
      `#${ queryString.stringify({sortBy, asc}) }`
    );
  }

  private checkUrl(): TableState {
    const query = this.props.location.hash.replace('#', ''),
          parsed = queryString.parse(query),
          { sortBy, asc } = parsed;

    if(sortBy && asc) {
      const column = sortBy.toString(),
            isAscending = asc === 'true';

      return {sortBy: column, asc: isAscending};
    }
    else {
      return {sortBy: '', asc: false};
    }
  }

  public render() {
    const { data, loading, loadRecords, clearRecords } = this.props,
          { changeUrlOnSort, defaultSorting } = this;

    return(
      <div className='app'>
        <Table
          head={RecordsTable}
          body={data}
          loading={loading}
          onLoad={loadRecords}
          clearBody={clearRecords}
          onSort={changeUrlOnSort}
          defaultState={defaultSorting}
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
