import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './style.css';
const axios = require('axios')


const initialState = {
  email: "",
  password: ""
};

class SignInView extends Component {
  constructor(props) {
    super(props);
    this.SignIn = this.SignIn.bind(this);
    this.state = initialState;
  }
  postToBackendSignin = async(url,body,headers) => (
    axios.post(url,JSON.stringify(body),headers)
    .then((response) => ({status: "success",message:"Sign in succesfull",token:response.data.token }))
    .catch((error) => ({status:"error",message:"No se pudo hacer sign in"}))
  );
  state = {
    redirect: false
  }

  SignIn = async () =>{
    const{email, password}= this.state

    const url = 'https://webproyectofinal.herokuapp.com/users/login';
    const headers ={
      headers:{
        'Content-Type': 'application/json'
      }
    };
    const body={
      email,
      password,
    };

    
    //console.log(body);

    const asyncLocalStorage = {
      setItem: function (key, value) {
          return Promise.resolve().then(function () {
              localStorage.setItem(key, value);
          });
      },
      getItem: function (key) {
          return Promise.resolve().then(function () {
              return localStorage.getItem(key);
          });
      }
  };


    const {status, message,token}= await this.postToBackendSignin(url,body,headers);
    if(status ==="success"){
////
      asyncLocalStorage.setItem('token', token).then(function () {
        return asyncLocalStorage.getItem('token');
      }).then(function (value) { 
        console.log('Value has been set to:', value);
      });
      console.log('waiting for value to become ');
    ////
     /// localStorage.setItem('token', token)
      alert(message);
      this.setState({
        redirect: true 
      })
      
    }else{
      alert(message);
    }
  }


  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Inventory' />;
    }
  }
      render() {
        return  <div>
          {this.renderRedirect()}
          <section id="container-form">
            <div id="form">
              <h1>Login</h1>
              <div className="input_wrap">
                <input id="email" type="text" name="email" placeholder="email" onChange={(e) => {
                      this.setState({ email: e.target.value })
                    }} />
              </div>
              <div className="input_wrap">
                <input id="password" type="password" name="password" placeholder="password" onChange={(e) => {
                      this.setState({ password: e.target.value })
                    }} />
              </div>
              <button id="login_button" onClick={this.SignIn} >Login</button>
              <div id="signup_option">or <a href="/signup">sign up!</a></div>
            </div>

          </section>
                  
                </div>
      }
    }

export default SignInView;

//<div dangerouslySetInnerHTML={{ __html: this.state.description }} />
