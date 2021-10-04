import React from "react";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
export default function Nav() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo ">
          Logo
        </Link>
        <SignedInLink></SignedInLink>
      </div>
    </nav>
  );
}
