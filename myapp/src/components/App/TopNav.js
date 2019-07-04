import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export default class TopNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top jr-top-nav">
        <div className="container">
           <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src={logo} style={{ height: 40 }} alt="logo" />
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/customers">Customer</Link>
              </li>
              <li>
                <Link to="/businesses">Business</Link>
              </li>
              <li>
                <Link to="/orders">Order</Link>
              <li>
                <Link to="/categories">Category</Link>
              </li>
              <li>
                <Link to="/users">User</Link>
              </li>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
            </ul>
        </div>
        </div>
      </nav>
    );
  }
}
