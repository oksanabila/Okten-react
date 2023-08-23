import React, {Component} from 'react';
import {Header} from "../components";
import {Outlet} from "react-router-dom";

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Outlet/>
            </div>
        );
    }
}

export default MainLayout;