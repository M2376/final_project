import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <button className="navbar-brand">
        <img
          src="data:image/jpeg;base64,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"
          width=""
          height="65"
          alt=""
        />
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button className="nav-link">
              Home
              <span className="sr-only"></span>
            </button>
          </li>
          <li className="nav-item">
            <a href="/Data">
              {" "}
              <button className="nav-link">Data</button>{" "}
            </a>
          </li>
          <li className="nav-item">
            <a href="/Comments">
              <button className="nav-link">Comments</button>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Links">
              <button className="nav-link">Links</button>
            </a>
          </li>
          <li className="nav-item">
            <a href="/WhyScoir?">
              <button className="nav-link">Why Scoir?</button>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Apply">
              <button className="nav-link">Apply</button>
            </a>
          </li>
          <li className="nav-item">
            <a href="/Graph">
              <button
                className="nav-link"
                onClick={() => {
                  console.log("HI");
                }}
              >
                Graph
              </button>
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by School Number"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-danger my-2 my-sm-0"
            onClick={() => {
              console.log("HI");
            }}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
