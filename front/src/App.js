import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from "./components/Navbar"
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Product from "./components/Product";
import Login from "./components/login";

function App() {
    return ( <
        div className = 'App' >
        <
        Navbar / >
        <
        Switch >
        <
        Route exact path = '/'
        component = { Product }
        /> <
        Route exact path = "/login"
        component = { Login }
        /> <
        /Switch> <
        /div>
    )
}
export default App