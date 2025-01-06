import React, { Component } from "react";
import Header from "./component/Header";
import { NavLink, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

import ReactR from './pages/ReactR'
import Word from './pages/Word'
import Tutorial from "./pages/Tutorial";
import Community from "./pages/Community";
import SearchInput from "./component/SearchInput";
import Search from "./pages/Search";

import './css/style.css'; 

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* 头部组件 */}
                    <h1><Header /></h1>
                </div>
                {/* 内容组件 */}
                <div class='link-container'>
                    <h2><NavLink to='/react'>React</NavLink></h2>
                    <h2><NavLink to='/word/tom/18'>文档</NavLink></h2>
                    <h2><NavLink to='/tutorial/?name=tom&age=18'>教程</NavLink></h2>
                    <h2><NavLink to='/community'>社区</NavLink></h2>
                    {/* <input type="text" placeholder="搜索" /> */}
                    <SearchInput />
                </div>
                <div class='content-container'>
                    <Switch>
                        <Route path='/react' component={ReactR}></Route>
                        <Route path='/word/:name/:age' component={Word}></Route>
                        <Route path='/tutorial' component={Tutorial}></Route>
                        <Route path='/community' component={Community}></Route>
                        <Route path='/search' component={Search} />
                    </Switch>
                </div>
            </div>
        )
    }
}