import React from 'react';
import UserCard from './components/UserCard';
import SearchFrom from './components/SearchForm';
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
    fetch(`https://api.github.com/rate_limit`)
    .then (res => res.json())
    .then (res => {
      console.log(res);
    })
    .catch(err => {console.log(err)})

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

  searchUser = userName => {
    this.setState({ currentUser: userName})
    console.log (this.state.currentUser)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentUser !== this.state.currentUser) {
      console.log ('component did update!')
      fetch(`https://api.github.com/users/${this.state.currentUser}`)
        .then (res => res.json())
        .then (res => {
          this.setState({gitHubData: res});
          //Clear followers list, and then fetch new data
          // this.setState({followers: []})
          // fetch(`http://api.github.com/users/${this.state.currentUser}/followers`)
          //   .then (res => res.json())
          //   .then (res => {
          //     res.forEach(item => {
          //       fetch(item.url)
          //       .then (res => res.json())
          //       .then (res => {
          //         // console.log (this.state.followers, 'follower forEach')
          //         this.setState({followers: [...this.state.followers, res ]})
          //       })
          //     .catch(err => {console.log(err, 'forEach error')})
          //   })
          // })
          // .catch(err => {console.log(err, 'follower error')})
          //end fetching new followers
        })
        .catch(err => {console.log(err)})
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>GitHub</h1>
          <SearchFrom searchUser={this.searchUser} />
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
