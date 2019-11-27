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
    currentUser: 'RobertDGordon',
    gitHubData: {},
    followers: []
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.currentUser}`)
    .then (res => res.json())
    .then (res => {
      // console.log(res);
      this.setState({gitHubData: res});
      // console.log(this.state.gitHubData)
    })
    .catch(err => {console.log(err)})

    fetch(`http://api.github.com/users/${this.state.currentUser}/followers`)
    .then (res => res.json())
    .then (res => {
      res.forEach(item => {
        fetch(item.url)
        .then (res => res.json())
        .then (res => {
          // console.log (this.state.followers, 'follower forEach')
          this.setState({followers: [...this.state.followers, res ]})
        })
        .catch(err => {console.log(err, 'forEach error')})
      })
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
          <h2>Followers:</h2>
          {this.state.followers.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </div>
    )
  }

}

export default App;
