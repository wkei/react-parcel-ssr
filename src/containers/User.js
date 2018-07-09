// src/components/User.js
import React, { Component, Fragment } from 'react'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { Redirect } from 'react-router-dom'

import Header from '~/components/Header'

class User extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
  clearName = () => {
    const { cookies } = this.props
    cookies.remove('name')
  }
  render () {
    const { cookies } = this.props
    const name = cookies.get('name')
    return (
      <div>
        <Header title='User (Test redirect)'/>
        {!name
          ? <Redirect to='/' />
          : (
            <Fragment>
              <p>Hi {name}</p>
              <p>(If you set your name empty in the home page, this page will be redirected to the home page)</p>
              <button onClick={this.clearName}>clear my name</button>
            </Fragment>
          )
        }
      </div>  
    )
  }
}

export default withCookies(User)
