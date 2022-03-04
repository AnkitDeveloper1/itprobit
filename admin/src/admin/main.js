import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import UsersService from "./services/usersServices";

import Header from './includes/header'
import Login from './login/index';
import Logout from './login/logout';
import Categories from './categories/listing';
import AddCategory from './categories/add';
import EditCategory from './categories/edit';

import Portfolio from './portfolio/listing';
import AddPortfolio from './portfolio/add';
import EditPortfolio from './portfolio/edit';

import Blogs from './blogs/listing';
import AddBlog from './blogs/add';
import EditBlog from './blogs/edit';

import BlogsCategories from './blogs_categories/listing';
import AddBlogCategories from './blogs_categories/add';
import EditBlogCategories from './blogs_categories/edit';

import Reviews from './reviews/listing';
import AddReview from './reviews/add';
import EditReview from './reviews/edit';

import Pages from './pages/listing';
import AddPage from './pages/add';
import EditPage from './pages/edit';

import "react-toastify/dist/ReactToastify.css";

class Main extends Component {

    user = {}
    constructor() {
        super();
        this.user = UsersService.getCurrentUser();
    }

    render() {
        
        return (<React.Fragment>
            
            <Header userName={this.user?this.user.name:''}></Header>

            <ToastContainer />
            
            <div className="container" style={{marginTop: "20px"}}>
                <Routes>
                    <Route path="/login" element={this.user?<Navigate to="/" />:<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    
                    <Route path="/portfolio" element={!this.user?<Navigate to="/" />:<Portfolio userName={this.user?this.user.name:''} />} />
                    <Route path="/portfolio/add" element={!this.user?<Navigate to="/" />:<AddPortfolio />} />
                    <Route path="/portfolio/edit/:id" element={!this.user?<Navigate to="/" />:<EditPortfolio />} />

                    <Route path="/blogs" element={!this.user?<Navigate to="/" />:<Blogs userName={this.user?this.user.name:''} />} />
                    <Route path="/blogs/add" element={!this.user?<Navigate to="/" />:<AddBlog />} />
                    <Route path="/blogs/edit/:id" element={!this.user?<Navigate to="/" />:<EditBlog />} />

                    <Route path="/blogs/categories" element={!this.user?<Navigate to="/" />:<BlogsCategories userName={this.user?this.user.name:''} />} />
                    <Route path="/blogs/categories/add" element={!this.user?<Navigate to="/" />:<AddBlogCategories />} />
                    <Route path="/blogs/categories/edit/:id" element={!this.user?<Navigate to="/" />:<EditBlogCategories />} />

                    <Route path="/categories" element={!this.user?<Navigate to="/" />:<Categories userName={this.user?this.user.name:''} />} />
                    <Route path="/categories/add" element={!this.user?<Navigate to="/" />:<AddCategory />} />
                    <Route path="/categories/edit/:id" element={!this.user?<Navigate to="/" />:<EditCategory />} />

                    <Route path="/reviews" element={!this.user?<Navigate to="/" />:<Reviews userName={this.user?this.user.name:''} />} />
                    <Route path="/reviews/add" element={!this.user?<Navigate to="/" />:<AddReview />} />
                    <Route path="/reviews/edit/:id" element={!this.user?<Navigate to="/" />:<EditReview />} />

                    <Route path="/pages" element={!this.user?<Navigate to="/" />:<Pages userName={this.user?this.user.name:''} />} />
                    <Route path="/pages/add" element={!this.user?<Navigate to="/" />:<AddPage userName={this.user?this.user.name:''} />} />
                    <Route path="/pages/edit/:id" element={!this.user?<Navigate to="/" />:<EditPage userName={this.user?this.user.name:''} />} />

                    <Route path="/" element={!this.user?<Navigate to="/login" />:'/'} />
                    <Route path='*' exact={true} element={<Navigate to="login" />} />
                </Routes>
            </div>
        </React.Fragment>)
    }

}

export default Main
