import React from "react";
import Notifications from "./Notifications";
import ProjectsList from "../projects/ProjectsList";
import { connect } from "react-redux";

const Dashboard = ({ projects }) => {
  console.log(projects);
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectsList projects={projects} />
        </div>
        <div className="col s12 m5">
          <Notifications />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};
export default connect(mapStateToProps)(Dashboard);
