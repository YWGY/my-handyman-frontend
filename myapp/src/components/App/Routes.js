import React from 'react';
import {Switch, Route} from 'react-router-dom';

import BusinessHome from '../Business/BusinessHome.js';
// import BusinessSchema from '../Business/BusinessSchema';
// import BusinessCRUD from '../Business/BusinessCRUD';
import BusinessEdit from '../Business/BusinessEdit';

export default () => (
    <Switch>
        <Route exact path = '/' component = { BusinessEdit} />
        {/* <Route exact path = '/businesses' component = {BusinessSchema} />  */}
        {/* <Route exact path = '/businesses/edit/:id' component = {BusinessCRUD} /> */}
        <Route exact path = '/' component = {BusinessHome} /> 

        <Route exact path = '/categories' component = {()=> <h1>Category List</h1>}/> 
        <Route exact path = '/orders' component = {()=> <h1>Orders List</h1>}/> 
    </Switch>
);