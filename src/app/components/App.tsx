import * as React from 'react';
import { loadRecords } from "app/redux/actions/recordsActions";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

interface AppProps extends RouteComponentProps {
  loadRecords: (sortColumn?: number, returnCount?: number) => void;
}

class App extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
  }

  public componentDidMount() {
    this.props.loadRecords();
  }

  // private changeHash(): void {
  //   this.props.history.push('#sort-by-weight');
  // }

  public render() {
    return(
      <div>
        <p>this is the app</p>
        <p>{this.props.location.hash.replace('#', '')}</p>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  ...state.recordsReducer
});

const mapDispatchToProps = dispatch => ({
  loadRecords: (sortColumn, returnCount) =>
    dispatch(loadRecords(sortColumn, returnCount)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
