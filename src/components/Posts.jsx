import { useState } from "react";
import axios from "axios"; // Fix voor verkeerde import naam
const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

export default function Post() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = async () => {
    try {
      const { data } = await axios.post(apiEndPoint, formData);
      console.log("User added:", data);
      alert("User added successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        login: "",
        password: "",
      }); // Form leegmaken na toevoegen
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user");
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="text"
        name="login"
        value={formData.login}
        onChange={handleChange}
        placeholder="Login"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button onClick={handleAdd}>Add User</button>
    </div>
  );
}
