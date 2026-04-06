import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { API_BASE_URL } from "../../constants";

const RecordForm = () => {
  const [form, setForm] = useState({
    amount: "",
    type: "income",
    category: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${API_BASE_URL}/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    alert("Record added");
  };

  return (
    <form className="space-y-3 p-4">
      <Input name="amount" placeholder="Amount" onChange={handleChange} />
      <Input name="category" placeholder="Category" onChange={handleChange} />

      <select name="type" onChange={handleChange} className="border p-2 rounded">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <Button type="submit">Add Record</Button>
    </form>
  );
};

export default RecordForm;