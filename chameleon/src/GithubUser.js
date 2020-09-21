import React, { Component } from 'react'

class GithubUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gitHubName: ''
    }
  }

  componentDidMount() {
    const options = {
      "headers": {
        "Authorization": "token f24de91b4b4b111558052b4ac7a09b05a499c15d",
        "Accept": "application/vnd.github.v3+json"
      }
    }
    fetch("https://api.github.com/users/TimCPB", options)
      .then(response => response.json())
      .then(data => {
        this.setState({gitHubName: data.name})
      })
  }

  render() {
    return (
      <div className="User">
        {this.state.gitHubName}
      </div>
    )
  }
}

export default GithubUser