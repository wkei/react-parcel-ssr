import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './NameForm.css'

class NameForm extends Component {
  static propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func
  }
  render () {
    return (
      <input
        className={styles.input}
        value={this.props.name}
        onChange={e => this.props.onChange(e.target.value)}
      />
    )
  }
}

export default NameForm
