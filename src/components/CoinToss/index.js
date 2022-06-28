// Write your code here
import {Component} from 'react'
import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {TossImg: headsImg, heads: 0, tails: 0}

  toggleTossCoin = () => {
    const {heads, tails} = this.state
    const Toss = Math.floor(Math.random() * 2)

    let TossImage = ''
    let HeadsCount = heads
    let TailsCount = tails

    if (Toss === 0) {
      TossImage = headsImg
      HeadsCount = heads + 1
    } else {
      TossImage = tailsImg
      TailsCount = tails + 1
    }
    this.setState({TossImg: TossImage, heads: HeadsCount, tails: TailsCount})
  }

  render() {
    const {heads, tails, TossImg} = this.state
    return (
      <div className="bg-cont">
        <div className="card-1">
          <h1 className="heading1">Coin Toss Game</h1>
          <h1>Heads (or) Tails</h1>
          <img className="imgEle" src={TossImg} alt="heads" />
          <button className="btn" type="button" onClick={this.toggleTossCoin}>
            Toss Coin
          </button>
          <p className="para">
            Total :{heads + tails}
            {'  '} heads :{heads} Tails :{tails}
          </p>
        </div>
      </div>
    )
  }
}
export default CoinToss
