// Uncontrolled form with:
// Submit button as seen in platform videos
// Login button as asked in previous exercises
// Reset button as asked in previous exercises 

import { Component } from "react"
import { createRef } from "react"

export class UncontrolledLogin extends Component {
    // _formRef is the object returned by createRef(), with a current key.
    _formRef = createRef(); // Adding ref={this._formRef} in <form>, we can use _formRef as a reference to the form

    // function to console.log form values, from submit button
    handleForm = (event) => {
        // To avoid submit
        event.preventDefault();

        // To get input values
        const form = event.target.elements;
        const username = form.username.value;
        const password = form.password.value;
        const remember = form.remember.checked;

        console.log({
            username,
            password,
            remember,
        })
    }

    // function to console.log form values, from login button
    onLogin = () => {
        // To get input values
        const form = this._formRef.current.elements;
        const username = form.username.value;
        const password = form.password.value;
        const remember = form.remember.checked;

        console.log({
            username,
            password,
            remember,
        })
    }

    // state just to handle the disabled button
    state = {
        buttonDisabled: true,
    }

    // function to set disabled button 
    setButton = () => {
        const form = this._formRef.current.elements;
        const username = form.username.value;
        const password = form.password.value;
        this.setState({
            buttonDisabled: username === "" || password === "",
        })
    }

    render() {
        return (
            <>
                <div>
                    <h3>Uncontrolled Form</h3>
                    <p>Inputs are uncontrolled because their value is NOT linked to the state.</p>
                    <p>We access values from DOM elements directly.</p>
                    <form ref={this._formRef} onSubmit={this.handleForm}>
                        <input name="username" type="text" defaultValue="" onChange={this.setButton}></input>
                        <input name="password" type="password" defaultValue="" onChange={this.setButton}></input>
                        <input name="remember" type="checkbox" defaultValue={false}></input>
                        <div>
                            <h4>Submit button</h4>
                            <button type="submit">Submit</button>
                            <p>Button with submit type is linked to function attached to the form in the onSubmit props.</p>
                        </div>
                        <div>
                            <h4>Login button: the submit button functionality + a dinamic disabled attribute</h4>
                            <button type="button" disabled={this.state.buttonDisabled} onClick={() => {this.onLogin()}}>Login</button>
                            <p>If button is clicked, a custom onLogin function, that works with the form ref, is called.</p>
                            <p>Button type equals to "button" to avoid default type="submit".</p>
                            <p>Button is active if both inputs are not empty.</p>                                                      
                        </div>
                        <div>
                            <h4>Reset button</h4>
                            <button type="reset">Reset</button>
                            <p>Button with type="reset" + defaultValue defined in input =&gt; Reset works without any function to call.</p>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
