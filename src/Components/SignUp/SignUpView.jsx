import React, { Component } from 'react';
import './style.css';
const axios = require('axios')

const initialState = {
  email: "",
  password: "",
  name: "",
  age: 0,
};

class SignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.CreateUser = this.CreateUser.bind(this);
    //super();
  }

  postToBackend = async (url, body, headers) => (
    axios.post(url, JSON.stringify(body),headers)
      .then((response) => ({ status: "success", message: "Se creo usuario" }))
      .catch((error) => ({ status: "error", message: "No se pudo crear" }))
  ); 

  CreateUser = async () => {
    const { email, password, name, age } = this.state
    

    const url = 'https://webproyectofinal.herokuapp.com/users';
    const headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = {
      email,
      password,
      name,
      age,
     };

     console.log(body);

    const { status, message } = await this.postToBackend(url, body, headers);

    if (status === "success") {
      alert(message);
    } else {
      alert(message);
    }
  }
      render() {
          return(
              <div>
        
              <section id="container-form">
                <div id="form">
                  <h1>Sign up</h1>
                  <div className="input_wrap">
                    <input id="email" type="text" name="email" placeholder="email" onChange={(e) => {
                      this.setState({ email: e.target.value })
                    }} />
                  </div>
                  <div className="input_wrap">
                    <input id="password" type="password" name="password" placeholder="password"  onChange={(e) => {
                      this.setState({ password: e.target.value })
                    }}/>
                  </div>
                  <div className="input_wrap">
                    <input id="name" type="text" name="name" placeholder="name" 
                     onChange={(e) => {
                      this.setState({ name: e.target.value })
                    }}/>
                  </div>
                  <div className="input_wrap">
                    <input id="age" type="number" name="age" placeholder="age"  onChange={(e) => {
                      this.setState({ age: e.target.value })
                    }}/>
                  </div>
                  <button className="Button2" onClick={this.CreateUser}>SignUp</button>
                  <div id="signup_option">or <a href="/SignIn">login!</a></div>
                </div>
              </section>
              
         </div>
          );
      }
    }

export default SignUpView;