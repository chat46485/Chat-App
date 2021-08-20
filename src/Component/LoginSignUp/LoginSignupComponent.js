import React, { Component } from "react";
import Login_UI from "./Login_UI";
import { CreateNewUser } from "../../Firebase/Firebase_ref";
class LoginSignUp extends Component {
  constructor(props) {
    super();
    this.state = {
      props: props,
      loginDetails: { username: null, password: null },
      signupDetails: { username: null, email: null, password: null }
    };
    this.handleLogin = this.handleLogin.bind(this)
    this.attemptLogin=this.attemptLogin.bind(this)
  }
  
  attemptLogin(){
    if(window.localStorage.getItem("chat-app-isloggedin")){
      let name= window.localStorage.getItem("chat-app-isloggedin");
      this.state.loginDetails.username=name
      this.state.props.setLoggedIn(true)
      this.state.props.setUserName(name)
    }

  }

  handleLogin(e) {
    // write Login Code Here
    //also save login state to local storage
    if (this.state.loginDetails.username != null) {
      let userName = this.state.loginDetails.username
      CreateNewUser(userName)
      this.saveUserNameToLocalStorage(userName)
      this.state.props.setLoggedIn(true)
      this.state.props.setUserName(userName)

    }
  }
  
  saveUserNameToLocalStorage(userName) {
    localStorage.setItem("chat-app-isloggedin", userName);

  }

  render() {
    return (
      <div className="LoginSignUp">
        <div className="LoginSignUp_inner">
          <Login_UI
            data={this.state.loginDetails}
            handleLogin={this.handleLogin}
            attemptLogin={this.attemptLogin}
          />
        </div>
      </div>
    )
  }
}
export default LoginSignUp;