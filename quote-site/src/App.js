import React from 'react';
import './App.css';


const quotes = [
  "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  "Be yourself; everyone else is already taken.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "So many books, so little time.",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
]
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      curIndex: 0
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({
      curIndex: Math.floor(Math.random() * quotes.length)
    })
  }

  render() {
    return (
      < div >
        <h1 className="quote">
          {quotes[this.state.curIndex]}
        </h1>
        <button className="button" onClick={this.handleClick}>
          press to generate new quote
        </button>

      </div >

    );
  }

}

export default App;
