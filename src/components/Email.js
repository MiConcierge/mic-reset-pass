import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class Email extends Component {
  state = {
    email: '',
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="The Email for the User"
          />
        </div>
        <button onClick={() => this._createLink()}>Submit</button>
      </div>
    )
  }

  _createLink = async () => {
  const { email } = this.state
  this.props.resetPassword({
    variables: {
      email
    }
  })
}

}

// 1
const RESET_PASSWORD = gql`
  mutation resetPassword($email: String!) {
    resetPassword(email: $email)
  }
`

// 3
export default graphql(RESET_PASSWORD, { name: 'resetPassword' })(Email)
