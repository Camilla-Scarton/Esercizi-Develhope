import { Component } from "react"

export class Login extends Component {
    state = {
        username: "",
        password: "",
        remember: false,
    }

    handleForm = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name]: type === "checkbox" ? checked : value,
        })
    }

    onLogin = (state) => {
        console.log(state);
    }

    render() {
        return (
            <>
                <div>
                    <h3>Controlled Form</h3>
                    <p>Inputs are controlled because their value is linked to the state.</p>
                    <form>
                        <input name="username" type="text" value={this.state.username} onChange={this.handleForm}></input>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleForm}></input>
                        <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleForm}></input>
                        <div>
                            <p>Button is active if both inputs are not empty. Button type equals to "button" to avoid default type="submit".</p>
                            <button type="button" disabled={this.state.username === "" || this.state.password === ""} onClick={() => {this.onLogin(this.state)}}>Login</button>
                            <p>If button is clicked, the onLogin function is called with current state passed as input.</p>
                        </div>
                    </form>
                </div>
                <div>
                    <h3>State</h3>
                    <div>Username input: {this.state.username}</div>
                    <div>Password input: {this.state.password}</div>
                    <div>Checkbox value: {this.state.remember ? "True" : "False"}</div>
                </div>
            </>
        )
    }
}
