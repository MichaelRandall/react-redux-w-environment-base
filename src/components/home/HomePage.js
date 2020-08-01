import React from "react";
import { Link } from "react-router-dom";

// functional component
const HomePage = () => (
  <div className="jumbotron">
    <h1>Home Page of Site</h1>
    <p>Details about the site or sub-heading</p>
    <Link to="about" className="but btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
