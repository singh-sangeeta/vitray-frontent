import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import './login';

export const Navbar = () => {
    return ( < nav className = "navbar navbar-expand-lg navbar-light bg-info" >
        <
        div className = "container" >
        <
        Link to = "/"
        className = "navbar-brand" > Vitray < /Link> <
        div className = "collapse navbar-collapse justify-content-end"
        id = "navbarNav" >
        <
        ul className = "navbar-nav" >
        <
        li className = "nav-item active" >
        <
        Link to = "/"
        className = "nav-link" > Home < /Link> </li >
        <
        li className = "nav-item" >
        <
        Link to = "/about"
        className = "nav-link" > About < /Link> </li >
        <
        li className = "nav-item" >
        <
        Link to = "/cart"
        className = "nav-link" > Cart < /Link> </li >
        <
        li className = "nav-item" >
        <
        Link to = "./login"
        className = "nav-link" > Login < /Link> </li >
        <
        form inline >
        <
        formcontrol type = "text"
        placeholder = "Search"
        className = "mr-sm-2" / >
        <
        button variant = "outline-info" > Search < /button> <
        /form> <
        /ul> <
        /div >  <
        /div>  <
        /nav >
    )
}