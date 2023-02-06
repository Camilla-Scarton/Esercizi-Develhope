import { useForm } from "./useForm";

export function Form() {
  const { username, password, handleInput } = useForm();

  return (
    <>
      <input
        name="username"
        value={username}
        onChange={handleInput}
        placeholder="username"
      ></input>
      <input
        name="password"
        value={password}
        onChange={handleInput}
        placeholder="password"
      ></input>
      <h2>State</h2>
      <div>
        <div>Username: {username}</div>
        <div>Passowrd: {password}</div>
      </div>
    </>
  );
}
