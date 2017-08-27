// Navigation Component
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {    

    constructor(props) {
        super(props);
        this.state = {isActive: false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({isActive: !this.state.isActive});
    };

    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="navbar-brand">
                        <h1>&lt; Jrs /&gt;</h1>

                        <div className="navbar-burger"  onClick={this.toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className={this.state.isActive ? "navbar-menu is-active" : "navbar-menu"}>
                        <div className="navbar-start">
                            <Link to="#">All&nbsp;jobs</Link>
                            <Link to="#">Juniors</Link>
                            <Link to="#">About</Link>
                        </div>
                        <div className="navbar-end">
                            <Link to="#">Sign&nbsp;up</Link>
                            <Link to="#">Sign&nbsp;in</Link>    
                        </div>    
                    </div>
                </nav>
            </div>
        );
    };
};

export default Navbar;