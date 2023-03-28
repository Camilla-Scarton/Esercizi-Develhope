import { useState } from "react";

export function useForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  const { username, password } = form;

  return { username, password, handleInput };
}
