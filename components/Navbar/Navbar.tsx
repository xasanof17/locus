import React from "react";
import Image from "next/image";
import { images } from "../../constants";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar navbar-expand-lg sticky-top header-nav">
          <div className="container">
            <a className="navbar-brand" href="">
              <Image src={images.logo} alt="logo" width={150} height={50} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse d-flex justify-content-center"
              id="navbarSupportedContent"
            >
              {/* <div className="header-nav_content"> */}
                <ul className="navbar-nav header-nav_content-list">
                  <li className="nav-item header-nav_content-list_item">
                    <a className="nav-link header-nav_content-list_item-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item header-nav_content-list_item">
                    <a className="nav-link header-nav_content-list_item-link" href="#">
                    Contact
                    </a>
                  </li>
                  <li className="nav-item header-nav_content-list_item">
                    <a className="nav-link header-nav_content-list_item-link" href="#">
                    Location
                    </a>
                  </li>
                  <li className="nav-item header-nav_content-list_item">
                    <a className="nav-link header-nav_content-list_item-link" href="#">
                    About Us
                    </a>
                  </li>
                </ul>
                <button className="btn btn-outline-primary">Sign Up</button>
              {/* </div> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
