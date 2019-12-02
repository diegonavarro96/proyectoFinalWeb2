import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './style.css';
const axios = require('axios')



const initialState = {
    description: "",
    quantity : 0,
    cash: 0,
  };

//console.log(token1);


class AddDelForm extends Component {
  constructor(props) {
    super(props);
    this.Create_update_item = this.Create_update_item.bind(this);
    this.state = initialState;
    
  }
  state = {
    redirect: false
  }
  postToBackendAddDel = async (url, body, headers) => (
    axios.post(url, JSON.stringify(body), headers)
      .then((response) => ({ status: "success", message: "se creo/modifico con exito" }))
      .catch((error) => ({ status: "error", message: "No se pudo crear" }))
  ); 
 
  Create_update_item = async () => {
    const{description, quantity,cash}= this.state
    const url = 'https://webproyectofinal.herokuapp.com/todos';
    const headers ={
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
      }
    };
    const body={
        description,
        quantity,
        cash,
      };
      const {status, message}= await this.postToBackendAddDel(url,body,headers);
        if(status ==="success"){
            //localStorage.setItem('token', token)
            //console.log('user token is = ',token)
            alert(message);
            this.setState({
            redirect: true 
            })
        }else{
          console.log("hgola perro")
        alert(message);
        }

  }
   


  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Inventory' />;
    }
  }

      render() {
        return (  
        <div>
        {this.renderRedirect()}
            <section id="container-form">
                <div id="form">
                  <h1>Add/Del Item</h1>
                  <div className="input_wrap">
                    <input id="email" type="text" name="description" placeholder="Item" onChange={(e) => {
                      this.setState({ description: e.target.value })
                    }} />
                  </div>
                  <div className="input_wrap">
                    <input id="password" type="number" name="quantity" placeholder="Amount/Sold/Bought"  onChange={(e) => {
                      this.setState({ quantity: e.target.value })
                    }}/>
                  </div>
                  <div className="input_wrap">
                    <input id="name" type="number" name="cash" placeholder="$" 
                     onChange={(e) => {
                      this.setState({ cash: e.target.value })
                    }}/>
                  </div>
                  <button className="Button2" onClick={this.Create_update_item}>Add/Del</button>
                </div>
              </section>
                    
                </div>
        );
      }
    }

export default AddDelForm;

//<div dangerouslySetInnerHTML={{ __html: this.state.description }} />
