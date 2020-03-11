import React from 'react';
import './App.css';

const quotes = [
  "test1",
  "test2",
  "test3",
  "test4"
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
        <button onClick={this.handleClick}>
          press to generate new quote
        </button>

      </div >

    );
  }

}

export default App;
