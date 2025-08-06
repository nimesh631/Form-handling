import { useState } from "react";

function OneStateForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form Data:", formData);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <br />

      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <br />

      <textarea
        name="message"
        value={formData.message}
        placeholder="your Message"
        onChange={handleChange}
        required
      />
      <br />

      <button type="submit">Send</button>
    </form>
  );
}

export default OneStateForm;
