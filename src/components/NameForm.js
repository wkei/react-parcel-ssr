import React, { Component } from 'react';

class NameForm extends Component {
  render () {
    return (
      <input
        value={this.props.name}
        onChange={e => this.props.onChange(e.target.value)}
      />
    )
  }
}

export default NameForm
