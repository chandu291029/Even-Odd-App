import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  EvenOdd = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'odd'
  }

  g = () => parseInt(Math.random() * 100)

  incress = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>count {count}</h1>

        <div>
          <h1>count is {this.EvenOdd()} </h1>
        </div>

        <button type="button" onClick={this.incress}>
          incress
        </button>
      </div>
    )
  }
}

export default EvenOddApp
