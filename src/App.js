/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Header from "./components/Header";
import "./components/styles/App.css";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="main">
                <Header id="header" />
                {/* <PersonalInfo />
                <JobHistory />
                <Education /> */}
            </div>
        );
    }
}

export default App;
