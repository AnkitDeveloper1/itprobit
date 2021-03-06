import React, { Component } from "react";
import { Link } from "react-router-dom";

import { useLocation } from 'react-router-dom'

class Header extends Component {
    render() {
        const { userName, currentpath } = this.props
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
                <div className="container-fluid">
                    <a className="navbar-brand" href="javscript:void(0)">Admin</a>
                    <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {userName && <React.Fragment>
                            <li className="nav-item">
                            <Link className={currentpath.includes("/") && currentpath.length === 1?"nav-link active":"nav-link"} to="/">Dashboard</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={currentpath.includes("/portfolio")?"nav-link dropdown-toggle active":"nav-link dropdown-toggle"} href="javscript:void(0)" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                    <li><Link className="dropdown-item" to="/categories">Categories</Link></li>
                                    <li><Link className="dropdown-item" to="/portfolio">Portfolio</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                            <Link className={currentpath.includes("/reviews")?"nav-link active":"nav-link"} to="/reviews">Reviews</Link>
                            </li>
                            <li className="nav-item">
                            <Link className={currentpath.includes("/pages")?"nav-link active":"nav-link"} to="/pages">Pages</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className={currentpath.includes("/blogs")?"nav-link dropdown-toggle active":"nav-link dropdown-toggle"} href="javscript:void(0)" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Blogs</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                    <li><Link className="dropdown-item" to="/blogs">Blogs</Link></li>
                                    <li><Link className="dropdown-item" to="/blogs/categories">Categories</Link></li>
                                </ul>
                            </li>
                            </React.Fragment> }
                            {!userName && <React.Fragment>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/login">Login</Link>
                            </li>
                            </React.Fragment>
                            }
                        </ul>
                        {userName && <React.Fragment>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="javscript:void(0)">{userName}</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/logout">Logout</a>
                            </li>
                        </ul>
                        </React.Fragment>
                        }
                    </div>
                </div>
            </nav>
        )
    }
}


export default function HeaderView(props) {
    const location = useLocation();
    return <Header {...props} currentpath={location.pathname} />
}
