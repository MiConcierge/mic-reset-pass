import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'


class Email extends Component {
  state = {
    email: '',
  }

  render() {
    return (

      <div>
      <h1>Forget Password?</h1>
      <form className="form" id="formulario" onSubmit={this._createLink.bind(this)}>
        <fieldset>
          <div className=" form-group">
            <div className="input-group">
              <p>Write your email</p>
              <input id="passInput" type="email" className="form-control" onChange={(e)=> this.setState({email: e.target.value})}/>
            </div>
          </div>
          <div className="form-group">
            <input className="btn btn-lg btn-primary btn-block" value="Verify Email" type="submit"/>
          </div>
    </fieldset>
    </form>
    </div>
    )
  }

  _createLink = async (e) => {
    e.preventDefault();
  const { email } = this.state
  await this.props.resetPassword({
    variables: {
      email
    }
  })
  if (this.props.resetPassword==null) {
    console.log('flase');
  }
  else {
    console.log('tue');
  }
  console.log(this.state);
}

}

// 1
const RESET_PASSWORD = gql`
  mutation resetPassword($email: String!) {
    resetPassword(email: $email)
  }
`

export default graphql(RESET_PASSWORD, { name: 'resetPassword' })(Email)
