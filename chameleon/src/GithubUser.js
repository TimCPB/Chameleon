import React, { Component } from 'react'
import parse from 'html-react-parser'
import ReactMarkdown from 'react-markdown'

class GithubUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gitHubData: ''
    }
  }

  

  componentDidMount() {
    console.log(process.env.REACT_APP_API_KEY)
    const options = {
      "headers": {
        "Authorization": "token 2891c7ee0c6ade07056c0117d7d4eed496d84bdd",
        "Accept": "application/vnd.github.v3.+json"
      }
    }
    fetch("https://api.github.com/repos/TimCPB/Nah-Mazon/readme")
      .then(response => response.json())
      .then(data => {
        var htmlz = atob(data.content)
        var htmlzz = parse(htmlz)
        var htmlzzz = htmlzz.join(' ')
        this.setState({gitHubData: htmlzzz})
      })
  }

  render() {
    return (
      <div className="User">
        <ReactMarkdown source={this.state.gitHubData} />
      </div>
    )
  }
}

export default GithubUser