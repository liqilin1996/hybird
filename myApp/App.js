import * as React from 'react';
import Navigation from './src/navigation';

export default class ExampleBasic extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Navigation />;
  }
}
