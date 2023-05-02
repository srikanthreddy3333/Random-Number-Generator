import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickRandomNumGenerate = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({
      randomNumber: newRandomNumber,
    })
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-number-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onClickRandomNumGenerate}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
