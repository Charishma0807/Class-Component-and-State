// Below one is a function component
// const Welcome = () => <h1>Hello, User</h1>

// class component

import {Component} from 'react'

class Welcome extends Component {
  render() {
    //   accessing the props
    const {name} = this.props
    return <h1>Hello, {name}</h1>
  }
}

export default Welcome
