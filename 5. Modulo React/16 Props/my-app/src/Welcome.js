import React from "react"

export class Welcome1 extends React.Component {
    render() {
        return <p>Welcome, {this.props.name}!</p>
    }
}

export class Welcome2 extends React.Component {
    render() {
        return <p>Welcome, {this.props.name ?? "Camilla"}!</p>
    }
}

export class Welcome3 extends React.Component {
    static defaultProps = {
        name: "Camilla",
    }
    render() {
        return <p>Welcome, {this.props.name}!</p>
    }
}

export class Welcome4 extends React.Component {
    render() {
        return <p>Welcome, {this.props.name}!</p>
    }
}

Welcome4.defaultProps = {
    name: "Camilla",
}