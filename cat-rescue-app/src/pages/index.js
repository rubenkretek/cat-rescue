import * as React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to="/adopt-a-cat">Adopt a Cat</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
