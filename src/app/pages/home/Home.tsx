import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/login">LOGIN</Link>
      <h1>HOME</h1>
      <p>This is a temporally home page!👌</p>
    </div>
  );
};
