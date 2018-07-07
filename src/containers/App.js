// src/components/App.js
import React, { Component } from 'react'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
 
import NameForm from '~/components/NameForm'

import '~/styles/main.css'
import styles from './App.css'
 
class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
 
  constructor(props) {
    super(props)
 
    const { cookies } = props
    this.state = {
      name: cookies.get('name') || 'Parcel'
    }
  }
 
  handleNameChange = (name) => {
    const { cookies } = this.props
 
    cookies.set('name', name, { path: '/' })
    this.setState({ name })
  }
 
  render() {
    const { name } = this.state
 
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Who are you ???????</h1>
        </header>
        <NameForm name={name} onChange={this.handleNameChange} />
        {this.state.name && <p className={styles.msg}>Hello {this.state.name}!</p>}
      </div>
    )
  }
}
 
export default withCookies(App)
