import React from "react"

//Without a default value, if the name is not passed, there is no error and nothing is rendered instead of the props missing.
export class Welcome1 extends React.Component {
    render() {
        return <p>Welcome, {this.props.name}!</p>
    }
}

//With a default value given with the nullish coalescing operator (??)
export class Welcome2 extends React.Component {
    render() {
        return <p>Welcome, {this.props.name ?? "Camilla"}!</p>
    }
}

//With a default value given with "static defaultProps = {...}" inside the class.
export class Welcome3 extends React.Component {
    static defaultProps = {
        name: "Camilla",
    }
    render() {
        return <p>Welcome, {this.props.name}!</p>
    }
}

//With a default value given with "Welcome4.defaultProps = {...}" outside the class.
export class Welcome4 extends React.Component {
    render() {
        return <p>Welcome, {this.props.name}!</p>
    }
}

Welcome4.defaultProps = {
    name: "Camilla",
}