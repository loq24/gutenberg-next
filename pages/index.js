import React from 'react';
import Blocks from '../components/Blocks'

export default class Index extends React.Component {
  render() {
    return (
      <Blocks blocks={this.props.builder} />
    )
  }
}
