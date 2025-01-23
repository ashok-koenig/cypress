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
              data-testid="firstname-input"
              value={formData.firstname}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
          {errors.firstname && (
            <p data-testid="firstname-error" style={{ color: "red", fontSize: "14px" }}>{errors.firstname}</p>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Last Name:
            <input
              type="text"
              name="lastname"
              data-testid="lastname-input"
              value={formData.lastname}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
          {errors.lastname && (
            <p data-testid="lastname-error" style={{ color: "red", fontSize: "14px" }}>{errors.lastname}</p>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              data-testid="email-input"
              value={formData.email}
              onChange={handleChange}
              style={{ display: "block", width: "100%", padding: "8px" }}
            />
          </label>
          {errors.email && (
            <p data-testid="email-error" style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
          )}
        </div>

        <button
          type="submit"
          data-testid="submit-button"
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
        <div data-testid="submitted-data" style={{ marginTop: "20px" }}>
          <h3 data-testid="submitted-data-title">Submitted Data</h3>
          <p data-testid="submitted-data-name">
            Name: {submittedData.firstname} {submittedData.lastname}
          </p>
          <p data-testid="submitted-data-email">Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
