import React from "react";
import { NavLink } from "react-router-dom";
export default function SignedInLink() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Signin</NavLink>
      </li>
      <li>
        <NavLink to="/">Signup </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn lighten-1 pink btn-floating  ">
          TA
        </NavLink>
      </li>
    </ul>
  );
}
