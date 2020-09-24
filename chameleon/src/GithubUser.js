import React, { Component } from 'react'

class GithubUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gitHubData: ''
    }
  }

  componentDidMount() {
    const options = {
      "headers": {
        "Authorization": "token e342e8b99859317b11c80ee1bff5ecab43d3bcd6",
        "Accept": "application/vnd.github.v3+json"
      }
    }
    fetch("https://api.github.com/users/TimCPB", options)
      .then(response => response.json())
      .then(data => {
        var htmlz = 
        this.setState({gitHubData: data})
      })
  }

  render() {
    return (
      <div className="User">
        {this.state.gitHubData.name}
        <p><img src={this.state.gitHubData.avatar_url} alt="profile" /></p>
      </div>
    )
  }
}

export default GithubUser