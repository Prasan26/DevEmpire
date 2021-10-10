import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-page">
      <h2>Error 404!  Page Not Found!</h2>
      <img src="assets/error.svg" className="error-svg" alt="A dragon breathing fire over a village" />
      <Link to="/" className="call-to-action-btn error-back-to-home-btn">
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
