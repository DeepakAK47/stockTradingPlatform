import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import "../index.css";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  useEffect(() => {
    const handleAuthChange = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleAuthChange);
    window.addEventListener("auth:login", handleAuthChange);
    window.addEventListener("auth:logout", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleAuthChange);
      window.removeEventListener("auth:login", handleAuthChange);
      window.removeEventListener("auth:logout", handleAuthChange);
    };
  }, []);

  const dashboardUrl = useMemo(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      return "http://localhost:3000";
    }

    let encodedUser = "";
    try {
      encodedUser = encodeURIComponent(btoa(unescape(encodeURIComponent(user))));
    } catch (error) {
      encodedUser = "";
    }

    const query = new URLSearchParams();
    query.set("token", token);
    if (encodedUser) {
      query.set("user", encodedUser);
    }

    return `http://localhost:3000?${query.toString()}`;
  }, [isAuthenticated]);

  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand me -5 navlogo" to="/">
          <img
            src="media/Images/logo.svg"
            class="me-5"
            style={{ width: "25%", height: "25%" }}
            alt="Logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="custom-link collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <form>
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted custom-link"
                  aria-current="page"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              {!isAuthenticated && (
                <li class="nav-item">
                  <div class="nav-link active">
                    <Login />
                  </div>
                </li>
              )}
              {isAuthenticated && (
                <li class="nav-item">
                  <a
                    class="nav-link active text-muted custom-link"
                    href={dashboardUrl}
                  >
                    Dashboard
                  </a>
                </li>
              )}
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted custom-link"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted custom-link"
                  aria-current="page"
                  to="/product"
                >
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted custom-link"
                  aria-current="page"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted custom-link"
                  aria-current="page"
                  to="/support"
                >
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
