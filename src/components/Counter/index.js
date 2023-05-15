// creating static components
// creating counter component

//extending Component class

import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    // console.log('Increase Button Clicked')
    this.setState(prevState => {
      console.log(`Previous State count is ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }
  onDecrement = () => {
    // console.log('Decrese Button Clicked')
    this.setState(prevState => {
      console.log(`Previous State Count is ${prevState.count}`)
      return {count: prevState.count - 1}
    })
  }
  render() {
    // access the state object here
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
