/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import "./components/styles/App.css";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="main">
                <Header id="header" />
                <div id="builder-container">
                    <PersonalInfo id="personal-info" className="form-block" />
                </div>
                {/* 
                <JobHistory />
                <Education /> */}
            </div>
        );
    }
}

export default App;
