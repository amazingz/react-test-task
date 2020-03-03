import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="footer">
                    <nav className="links">
                        <ul>
                            <li>
                               <a href="https://#" className="menu__links" > 
                                    About 
                               </a>
                            </li>
                            <li >
                                <a href="https://#" className="menu__links">
                                    (C) TestTask 2020
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
}