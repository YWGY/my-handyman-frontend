//展示detail view，bootstrap结构和框架

import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

 export default function BusinessDetailDisplay(props){
     const navbar = (
         <Navbar>
             <Navbar.Header>
                 <NavbarBrand>
                    <a href='#'>Handyman System-Business</a>
                 </NavbarBrand>           
             </Navbar.Header>
         </Navbar>
     )

 }