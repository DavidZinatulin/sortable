import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export namespace Table {
  export interface Props extends RouteComponentProps {
    whatever?: any;
  }
}

export class Table extends React.Component<Table.Props> {

  constructor(props: Table.Props, context?: any) {
    super(props, context);
    console.log();
    this.changeRoute = this.changeRoute.bind(this);
  }

  changeRoute(): void {
    this.props.history.push('#sort-by-weight');
  }

  render() {
    return (
      <div onClick={this.changeRoute}>
        Table {this.props.location.hash.replace('#', '')}
      </div>
    );
  }
}
