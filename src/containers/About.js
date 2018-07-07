// src/components/About.js
import React, { Component } from 'react'

import Header from '~/components/Header'

import styles from './About.css'

class About extends Component {
  render () {
    return (
      <main>
        <Header title='About' />
        <article className={styles.article}>
          <p>this is a static page</p>
          <p>this is a static page</p>
          <p>this is a static page</p>
        </article>
      </main>
    )
  }
}

export default About
