import React from 'react';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     gitHubData: {}
  //   }
  // }

  state = {
    gitHubData: {}
  }

  componentDidMount() {
    fetch('https://api.github.com/users/RobertDGordon')
    .then (res => res.json())
    .then (res => {
      // console.log(res);
      this.setState({gitHubData: res});
      console.log(this.state.gitHubData)
    })
    .catch(err => {console.log(err)})
  }

  render() {
    return (
      <div>
        <header>
          <h1>GitHub</h1>
        </header>
        <UserCard
          {...this.state.gitHubData}
        />
      </div>
    )
  }

}

export default App;
