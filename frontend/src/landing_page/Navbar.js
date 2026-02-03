import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
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
