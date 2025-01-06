import React, { Component } from "react";

export default class Word extends Component {
    render() {
        return (
            <div>
                <h2>Word组件</h2>
                <h2>name:{this.props.match.params.name}</h2>
                <h2>age:{this.props.match.params.age}</h2>
            </div>
        )
    }
}