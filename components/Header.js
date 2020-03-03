import React, {Component} from 'react';
import logo from '../logo.svg';
import {LoginPage}  from './components/LoginPage';


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <a href="https://#" className="logo">
                        <img alt="logo" src={logo}></img>
                    </a>
                    <nav className="links">
                        <ul>
                            <li>
                               <a href="https://#" className="menu__links" > 
                                    Sign in 
                               </a>
                            </li>
                            <li >
                                <a href="https://#" className="menu__links">
                                    Sign up
                                </a>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </nav>
                    

                </div>
                
            </header>
            
        )
    }
}