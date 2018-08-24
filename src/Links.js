import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const CustomLink = ({ activeStyle, children, className, to, activeOnlyWhenExact }) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link to={to} className={className} style={match && activeStyle}>{children}</Link>
  )}/>
);

const Links = () => (
  <div>
    <p>
        <CustomLink activeStyle={{color: 'red'}} to='/'>Home</CustomLink>
    </p>
    <p>

      <CustomLink activeStyle={{color: 'pink'}} to='/address'>Address</CustomLink>
    </p>
  </div>
)

export default Links
