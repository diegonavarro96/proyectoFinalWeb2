import React,{Component} from 'react';
import './style.css'
//import {AppProvider, Page} from '@shopify/polaris';
import DataTable from './DataTable';
import axios from 'axios';
var rows = [

];


const url = 'https://webproyectofinal.herokuapp.com/users';
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }
  };
class TableView extends Component{

  state ={
    items :[],
  };
  

  componentDidMount() {
    
    axios.get(url,headers)
    .then(response => {
      console.log(response.data);
      this.setState({items: response.data});
      console.log('fgfgdfsgdfsfgds')
      for( let i = 0; i < this.state.items.todos.length; i++) {
      console.log('sdssd')
      rows.push([this.state.items.todos[i].description,this.state.items.todos[i].quantity,this.state.items.todos[i].cash])
  }
    console.log(rows)
    this.setState({ state: this.state });
    })
    .catch(error => {
      console.log(error);
      window.location.reload();
    });
    //this.forceUpdate();
    //this.setState({ state: this.state });
   // this.setState
  }
  // updateTable () {
    
  // console.log(rows)
  // }
  cleanRows(){
      rows = []
  }

  render() {
    ///////////////////DATA from tables////////////////

const headings = [
    'Product name',
    'SKU',
    'Stock quantity',
  ];


//////////////////////////////////////
            return(
                  <div >
                    

                <div className ="Table-view">
                  <DataTable headings={headings} rows={rows} />
                </div>
                {this.cleanRows()}  
                </div>
            );
        }
    }

export default TableView;