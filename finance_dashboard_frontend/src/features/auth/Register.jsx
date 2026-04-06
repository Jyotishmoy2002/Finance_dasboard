import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message);
        return;
      }

      alert("User registered successfully");
      setForm({
        name: "",
        email: "",
        password: ""
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-96 p-6 shadow rounded-xl space-y-4 bg-white"
      >
        <h2 className="text-xl font-bold">Register</h2>

        <Input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;