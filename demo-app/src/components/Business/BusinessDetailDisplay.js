//展示detail view，bootstrap结构和框架

import React from 'react';
import { business } from 'react-bootstrap';

 export default function BusinessDetailDisplay(props){
     const {business} = props;
     return (
         <div className="CMS-detail_container">
             <div className="CMS-detail_header">
                 <Row>
                     <col sm={4}>sideNav</col>
                     <col sm={8}>mainContent</col>
                 </Row>

             </div>

         </div>
     )

 }