import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
    {
        path:'/',
        exact: true,
        sidebar:() => <div>Home</div>,
        main: () => <h2>Home</h2>
    },
    {
        path:'/Business',
        exact: true,
        sidebar:() => <div>Business</div>,
        main: () => <h2>Business</h2> 
    }
];

function Sidebar() {
    return (
        <Router>
            <div style={{display: "flex"}}>
                <div style={{
                    padding: "10px",
                    width: "40%",
                    background: "#f0f0f0"}}>
                    <ul style={{listStyleType: "none", padding: 0}}>
                        <li>
                            <link to="/">Home</link>
                        </li>
                        <li>
                            <link to="/Business">Home</link>
                        </li>
                    </ul>

                    {routes.map((route,index)=>(
                        <Route
                          key = {index}
                          path = {route.path}
                          exect = {route.exect}
                          component = {route.sidebar}
                        />
                    ))}
                </div>

            </div>
        </Router>
    );
}

export default Sidebar;
