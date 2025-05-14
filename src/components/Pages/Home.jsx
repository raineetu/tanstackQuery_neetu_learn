import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/new">FetchNew</Link>
        </li>
        <li>
          <Link to="/old">FetchOld</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
