import React from 'react';
// import {Link} from 'react-router-dom';

export default function BusinessHome ({business}){
    return (
    <div className="BusinessHome-total">
        <div className="BusinessHome-header">
            {/* <div className="BusinessHome-nav">
                <ul className="menu">
                    <li> <a href="Customer">Customer</a> </li>
                    <li> <a href="Business">Business</a> </li>
                    <li> <a href="Category">Category</a> </li>
                    <li> <a href="order">order</a> </li>                   
                </ul>         
            </div> */}
        </div>
        <div className="BusinessHome-content">
            
                <div className = "BusinessHome-list">
                    <li>
                    <label className="nameoflabel">Business Name <input className="nameofinput" /></label>
                    </li>
                    <li>
                    <label className="nameoflabel">ABN <input className="nameofinput" /> </label>
                    </li>
                    <li>
                    <label className="nameoflabel">Email <input className="nameofinput" /></label>
                    </li> 
                    <li>
                    <label className="nameoflabel">Phone <input className="nameofinput" /></label>
                    </li>
                    <li>
                    <label className="nameoflabel">Street Address <input className="nameofinput" /></label>
                    </li>
                    <li>
                    <label className="nameoflabel">Postcode <input className="nameofinput" /></label>
                    </li> 
                    <li>
                    <label className="nameoflabel">State <input className="nameofinput" /></label>
                    </li> 
                </div>                                      
                </div>
            </div>
   
    )
}


