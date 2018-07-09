import React, { Component } from 'react'
import { withRouter, matchPath } from 'react-router'
import { Link } from 'react-router-dom'
import classnames from 'classnames/bind'

import routes from '~/routes'

import styles from './Header.css'
const cx = classnames.bind(styles)

class Header extends Component {
  isActive = (path) => {
    const { pathname } = this.props.location
    const reg = new RegExp(`^${path}$`)
    return !!pathname.match(reg)
  }

  render () {
    const { title } = this.props
    return (
      <header className={styles.header}>

        <nav className={styles.nav}>
          <Link className={cx('item', { active: this.isActive('/') })} to='/'>HOME</Link>
          <Link className={cx('item', { active: this.isActive('/about') })} to='/about'>ABOUT</Link>
          <Link className={cx('item', { active: this.isActive('/user') })} to='/user'>USER</Link>
        </nav>

        <h1 className={styles.title}>{ title }</h1>
      </header>
    )
  }
}

export default withRouter(Header)
