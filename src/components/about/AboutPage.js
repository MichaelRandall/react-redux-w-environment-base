import React from "react";
import { Link } from "react-router-dom";

// functional component
const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>Details about the site or organization about the site</p>
    <Link to="about" className="but btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default AboutPage;
