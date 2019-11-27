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
    gitHubData: {},
    followers: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/RobertDGordon')
    .then (res => res.json())
    .then (res => {
      // console.log(res);
      this.setState({gitHubData: res});
      // console.log(this.state.gitHubData)
    })
    .catch(err => {console.log(err)})

    fetch(`http://api.github.com/users/RobertDGordon/followers`)
    .then (res => res.json())
    .then (res => {
      // console.log(res);
      res.forEach(item => {
        fetch(item.url)
        .then (res => res.json())
        .then (res => {
          // console.log (this.state.followers, 'follower forEach')
          this.setState({followers: [...this.state.followers, res ]})
        })
        .catch(err => {console.log(err, 'forEach error')})
      })
      // this.setState({followers: res});
      // console.log(this.state.followers)
    })
    .catch(err => {console.log(err, 'follower error')})
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
        <div className='followers'>
          {this.state.followers.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    )
  }

}

export default App;
