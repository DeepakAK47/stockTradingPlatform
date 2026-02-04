import React, { useState } from "react";
import axios from "axios";
import "./SignUpModal.css";

function SignUpNow() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleContinue = () => {
    if (email) {
      setFormData({ ...formData, email: email });
      setShowModal(true);
    } else {
      alert("Please enter your email address");
    }
  };

  const handleModalChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3002/auth/signup",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data.success) {
        setSuccess(true);
        setError("");
        setTimeout(() => {
          // Store token and redirect to dashboard
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          window.location.href = "http://localhost:3000"; // Redirect to dashboard
        }, 2000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      username: "",
      email: email,
      password: "",
      confirmPassword: "",
    });
    setError("");
    setSuccess(false);
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-0"></div>
        <div className="col-4">
          <img
            src="media/Images/account_open.svg"
            className="responsive-image1 me-5"
          />
        </div>
        <div className="col-2"></div>
        <div className="col-6 mr-5">
          <h3 className="mb-3 text-muted">Signup now</h3>
          <p className="text-body-tertiary mb-3">
            Enter mail ID and continue
          </p>
          <div class="input-group mb-3" style={{ width: "45%", height: "10%" }}>
            <input
              type="email"
              class="form-control mb-3"
              style={{ width: "", height: "" }}
              placeholder="Enter your email address"
              aria-label="Email"
              aria-describedby="basic-addon1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="button"
            class="btn btn-primary "
            style={{ width: "40%", height: "10%" }}
            onClick={handleContinue}
          >
            <h5>Continue</h5>
          </button>
          <p className="mt-5 mb-5 text-muted">
            {" "}
            By proceeding, you agree to the Zerodha{" "}
            <a href="" style={{ textDecoration: "none" }} text-muted>
              terms{" "}
            </a>
            &{" "}
            <a href="" style={{ textDecoration: "none" }}>
              privacy policy
            </a>
          </p>
        </div>
        <div className="col-0"></div>
      </div>

      {/* Signup Modal */}
      {showModal && (
        <div className="signup-modal-overlay" onClick={closeModal}>
          <div className="signup-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
            
            <h2 className="modal-title">Complete Your Signup</h2>
            
            {success ? (
              <div className="success-message">
                <h3>✓ Account Created Successfully!</h3>
                <p>Redirecting to dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && <div className="modal-error-message">{error}</div>}
                
                <div className="modal-form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleModalChange}
                    required
                    placeholder="Choose a username"
                    minLength="3"
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="modal-email">Email</label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    value={formData.email}
                    onChange={handleModalChange}
                    required
                    placeholder="Your email address"
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleModalChange}
                    required
                    placeholder="Create a password (min 6 characters)"
                    minLength="6"
                  />
                </div>

                <div className="modal-form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleModalChange}
                    required
                    placeholder="Confirm your password"
                    minLength="6"
                  />
                </div>

                <button type="submit" className="modal-submit-btn" disabled={loading}>
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUpNow;
