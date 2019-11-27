import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    gitHubData:[]
  }

  componentDidMount() {
    fetch('https://api.github.com/users/RobertDGordon')
    .then (res => res.json())
    .then (res => {
      console.log(res);
      this.setState({gitHubData: res.message});
    })
    .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GitHub</h1>
        </header>
      </div>
    )
  }

}

export default App;
