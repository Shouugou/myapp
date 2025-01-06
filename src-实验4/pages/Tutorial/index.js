import React, { Component } from "react";

export default class Tutorial extends Component {
    render() {
        return (
            <div>
                <h2>教程组件</h2>
                <h2>name:{this.props.location.name}</h2>
                <h2>age:{this.props.location.age}</h2>
            </div>
        )
    }
}