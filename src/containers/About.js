// src/components/About.js
import React, { Component } from 'react'
import { connect } from 'react-redux'
import _isEmpty from 'lodash/isEmpty'
import _fetch from '~/utils/_fetch'
import { getData } from '~/store/actions'

import Header from '~/components/Header'

import styles from './About.css'

class About extends Component {
  static fetchData = async (dispatch) => {
    return dispatch(getData())
  }
  componentDidMount () {
    console.log('About componentDidMount')
    if (_isEmpty(this.props.exampleData)) {
      this.props.getData()      
    }
  }
  render () {
    const exampleData = this.props.exampleData
    const exampleDataStr = JSON.stringify(exampleData, null, 2)

    return (
      <main>
        <Header title='About' />
        <article className={styles.article}>
          <p>this is a page with api call:</p>
          <p>[GET] https://reqres.in/api/unknown</p>
        </article>
        <pre>
          {exampleDataStr}
        </pre>
      </main>
    )
  }
}

const mapProps = [
  state => ({
    exampleData: state.example.data
  }),
  {
    getData
  }
]

export default connect(...mapProps)(About)
