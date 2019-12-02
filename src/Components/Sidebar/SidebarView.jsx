import React,{Component} from 'react';
import './style.css';
import SidebarButton from './../SidebarButton';

import {
   // BrowserRouter as Router,
   // Switch,
    //Route,
    Link
    //useRouteMatch,
    //useParams
  } from "react-router-dom";


const menu =[{
    icon:'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/add_user-512.png' ,
    label:'Sign up/Sign In',
    linkTO:'/SignIn',
    id: 14,
}, 
    {
    icon:'https://cdn1.iconfinder.com/data/icons/DarkGlass_Reworked/128x128/apps/kthememgr.png',
    label: 'Inventory',
    linkTO:'/Inventory',
    id: 13,

},
{
    icon:'https://cdn4.iconfinder.com/data/icons/success-filloutline/64/Income-cash-money-banking-business-512.png',
    label: 'Sales',
    linkTO:'/Sales',
    id: 12,
},{
    icon:'https://cdn2.iconfinder.com/data/icons/marketing-management-line-synergy/512/ROI-128.png',
    label:'Expenses',
    linkTO:'/Expenses',
    id: 11,
},
{
    icon:'https://image.flaticon.com/icons/svg/856/856039.svg' ,
    label:'Receipts',
    linkTO:'/Receipts',
    id: 10,
},


];


class SidebarView extends Component{
    render(){
        return (
            <div>
            <div className="sidebar">
                <h1 className="logo">Dot</h1>
                {
                    menu.map((item)=>(
                        
                        <Link to={item.linkTO}
                            key = {item.id}
                        >
                        <SidebarButton
                            icon={item.icon}
                            label={item.label}
                        />
                        </Link>
                    
                    ))
                }
            </div>
            </div>
        );
    }
}
export default SidebarView;
