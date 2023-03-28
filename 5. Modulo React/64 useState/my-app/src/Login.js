import { useState } from "react";

export function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleForm(event) {
    const { name, value, type, checked } = event.target;

    setForm((form) => {
      return {
        ...form,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function onLogin(form) {
    console.log(form);
  }

  return (
    <>
      <div>
        <h3>Controlled Form</h3>
        <p>Inputs are controlled because their value is linked to the state.</p>
        <form>
          <input
            name="username"
            type="text"
            value={form.username}
            onChange={handleForm}
          ></input>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleForm}
          ></input>
          <input
            name="remember"
            type="checkbox"
            checked={form.remember}
            onChange={handleForm}
          ></input>
          <div>
            <p>
              Button is active if both inputs are not empty. Button type equals
              to "button" to avoid default type="submit".
            </p>
            <button
              type="button"
              disabled={form.username === "" || form.password === ""}
              onClick={() => {
                onLogin(form);
              }}
            >
              Login
            </button>
            <p>
              If button is clicked, the onLogin function is called with current
              state passed as input.
            </p>
          </div>
        </form>
      </div>
      <div>
        <h3>State</h3>
        <div>Username input: {form.username}</div>
        <div>Password input: {form.password}</div>
        <div>Checkbox value: {form.remember ? "True" : "False"}</div>
      </div>
    </>
  );
}
