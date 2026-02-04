import React, { useState } from "react";
import axios from "axios";
import "./LoginModal.css";

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      email: "",
      password: "",
    });
    setError("");
  };

  const handleChange = (e) => {
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

    try {
      const response = await axios.post(
        "http://localhost:3002/auth/login",
        formData
      );

      if (response.data.success) {
        // Store token and user data
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        // Notify navbar and close modal
        window.dispatchEvent(new Event("auth:login"));
        handleCloseModal();
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Login Button/Link */}
      <button 
        className="login-trigger-btn"
        onClick={handleOpenModal}
      >
        Login
      </button>

      {/* Login Modal */}
      {showModal && (
        <div className="login-modal-overlay" onClick={handleCloseModal}>
          <div className="login-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>
              &times;
            </button>
            
            <h2 className="modal-title">Login to Zerodha</h2>
            
            <form onSubmit={handleSubmit}>
              {error && <div className="modal-error-message">{error}</div>}
              
              <div className="modal-form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="modal-form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  minLength="6"
                />
              </div>

              <button type="submit" className="modal-submit-btn" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="modal-footer">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
