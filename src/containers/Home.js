import { Cookies, withCookies } from 'react-cookie'
// src/components/Home.js
import React, { Component } from 'react'

import { Button } from 'antd';
import Header from '~/components/Header'
import NameForm from '~/components/NameForm'
import { instanceOf } from 'prop-types'
import styles from './Home.css'

class Home extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
 
  constructor(props) {
    super(props)
 
    const { cookies } = props
    this.state = {
      name: cookies.get('name')
    }
  }

  componentDidMount () {
    console.log('Home componentDidMount')
  }

  handleNameChange = (name) => {
    const { cookies } = this.props
 
    cookies.set('name', name, { path: '/' })
    this.setState({ name })
  }

  render() {
    const { name } = this.state

    return (
      <main>
        <Button type="primary">Test</Button>
        <Header title={'Who are you ?'} />
        <NameForm name={name} onChange={this.handleNameChange} />
        {this.state.name && <p className={styles.msg}>Hello {this.state.name}!</p>}
      </main>
    )
  }
}

export default withCookies(Home)
