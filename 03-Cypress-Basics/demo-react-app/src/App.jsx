import React, { useState } from "react";

function App() {
  // State for form inputs and validation messages
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate the form
  const validateForm = () => {
    let validationErrors = {};
    if (!formData.firstname.trim()) {
      validationErrors.firstname = "First name is required.";
    }
    if (!formData.lastname.trim()) {
      validationErrors.lastname = "Last name is required.";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is invalid.";
    }
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSubmittedData(formData);
    } else {
      setErrors(validationErrors);
      setSubmittedData(null);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Demo React App</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: "10px" }}>
          <label>
            First Name:
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
          {errors.firstname && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.firstname}</p>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Last Name:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
          {errors.lastname && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.lastname}</p>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data</h3>
          <p>
            Name: {submittedData.firstname} {submittedData.lastname}
          </p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
