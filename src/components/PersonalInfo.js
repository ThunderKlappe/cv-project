import React, { Component } from "react";

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id={this.props.id} className={this.props.className}>
                <form>
                    <InputField id="first-name" />
                    <InputField id="last-name" />
                    <InputField id="street-address" />
                    <InputField id="city" />
                    <InputField id="State" />
                    <InputField id="zip" />
                    <InputField id="phone" />
                    <InputField id="email" />
                </form>
            </div>
        );
    }
}

export default PersonalInfo;
