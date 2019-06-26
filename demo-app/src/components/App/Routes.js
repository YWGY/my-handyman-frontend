import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import businessCard from '../Business/BusinessCard';
// import businessDetailDisplay from '../Business/BusinessDetailDisplay';
import businessDetailView from '../Business/BusinessDetailView';
import businessEditView from '../Business/BusinessEditView';
import businessView from '../Business/BusinessView';

export default () => (
    <Switch>
        <Route exact path='/' component={businessView}/>
        <Route exact path='/businessid' component={businessView}/>
        <Route exact path='/businessid/: id' component={businessDetailView}/>
        <Route exact path='/businessid/edit/: id' component={businessEditView}/>
    </Switch>
);