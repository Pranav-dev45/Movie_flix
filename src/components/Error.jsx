import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-container">
      <h1 className="error-code">{err?.status || '404'}</h1>

      <h2 className="error-title">OOPS! Something Went Wrong</h2>

      <p className="error-message">
        {err?.statusText || 'The page you are looking for does not exist.'}
      </p>

      <Link to="/" className="home-btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
