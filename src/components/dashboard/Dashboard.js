import React from "react";
import Notifications from "./Notifications";
import ProjectsList from "../projects/ProjectsList";
export default function Dashboard() {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectsList />
        </div>
        <div className="col s12 m5">
          <Notifications />
        </div>
      </div>
    </div>
  );
}
