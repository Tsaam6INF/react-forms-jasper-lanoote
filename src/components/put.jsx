import { useState } from "react";
import axios from "axios";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user";

export default function Put() {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      console.log("Verstuurde data:", formData);

      const headers = {
        "Content-Type": "application/json",
      };

      // 🔥 PUT zonder ID in de URL, maar mét in de body
      const { data } = await axios.put(apiEndPoint, formData, { headers });

      console.log("Update successful:", data);
      alert("Gebruiker succesvol geüpdatet!");
    } catch (error) {
      console.error("Error updating user:", error);
      alert(`Fout bij het updaten: ${error.response?.data || error.message}`);
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      <input
        type="number"
        name="user_id"
        placeholder="User ID"
        value={formData.user_id}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
