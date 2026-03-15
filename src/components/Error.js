import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  // console.log(error);

  return (
    <div className="error-container">
      <h2>Oops!!</h2>
      <h3>{error?.status + " - " + error?.statusText}</h3>

      <span className="error-message">
        <h4>Message: </h4> &nbsp;
        <p>{error?.error?.message}</p>
      </span>
    </div>
  );
};

export default Error;
