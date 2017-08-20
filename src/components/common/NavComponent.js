// Navigation Component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (      
   <div className="navbar">
    <h1>&lt; Jrs /&gt;</h1>
    <div className="nav-left">
      <Link to="#">All&nbsp;jobs</Link>
      <Link to="#">Juniors</Link>
      <Link to="#">About</Link>
    </div>
    <div className="nav-right">
      <Link to="#">Sign&nbsp;up</Link>
      <Link to="#">Sign&nbsp;in</Link>
    </div>
   </div>     
    );
  }
}

export default Navbar;