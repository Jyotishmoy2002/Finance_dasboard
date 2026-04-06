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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-96 p-6 shadow rounded-xl space-y-4">
        <h2 className="text-xl font-bold">Register</h2>

        <Input name="name" placeholder="Name" onChange={handleChange} />
        <Input name="email" placeholder="Email" onChange={handleChange} />
        <Input name="password" type="password" placeholder="Password" onChange={handleChange} />

        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default Register;