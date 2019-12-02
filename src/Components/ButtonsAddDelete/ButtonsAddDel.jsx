import React,{Component} from 'react';
import './style.css'
import {Redirect} from 'react-router-dom'
const axios = require('axios')
let auxRedirect = ''


class ButtonAddDel extends Component{
    state ={
        redirect: false
    }

    postToBackendSignout = async(url,body,headers) => (
        axios.post(url,body,headers)
        .then((response) => ({status: "success",message:"Sign out succesfull",token:response.data.token }))
        .catch((error) => ({status:"error",message:"No se pudo hacer sign out"}))
      );
    signOut = async () =>{

        const url = 'https://webproyectofinal.herokuapp.com/users/logout';
        const headers ={
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }
        };

        const { status, message} = await this.postToBackendSignout(url,{}, headers);
        if (status === "success") {
            alert(message);
            auxRedirect = '/signin'
            this.setState({
                redirect: true
            })


        } else {
            alert(message);
        }

    }
    boughtProduct = async () =>{
        auxRedirect = '/del'
    this.setState({
        redirect: true 
        })

    }
    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={auxRedirect} />;
        }
      }
    render(){
        return (
            <div>
                {this.renderRedirect()}
                <button className ="buttons" onClick={this.boughtProduct}>
                    Bought Product
                </button>
                <button className ="buttons" onClick={this.signOut}>
                    Sign Out
                </button>
            </div>
            
        );
    }
}
export default ButtonAddDel;
