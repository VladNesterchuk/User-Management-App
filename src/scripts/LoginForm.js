import React from "react";
import { IoMdClose } from "react-icons/io";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      login: "",
      password: "",
      show: false
    };
  }

  render() {
    return (
        <div className="login-overlay" onClick={this.props.onClose}>
            <form className="login-form" onSubmit={(e) => e.preventDefault()} onClick={(e) => e.stopPropagation()}>
                <IoMdClose className="login-form-close" onClick={this.props.onClose}/>

                <input
                placeholder="Enter login"
                value={this.state.login}
                onChange={(e) => this.setState({ login: e.target.value })}
                />
                <input
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                />

                {this.props.error && (
                  <div className="error">{this.props.error}</div>)}
                
                <button
                type="button" onClick={this.submit}
                >
                Login
                </button>
            </form>
        </div>
    );
  }

  submit = () => {
    this.props.onLogin(this.state.login , this.state.password);
  }
  
}

export default LoginForm;
