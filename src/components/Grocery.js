import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="body grocery-container">
      <h5>It is a demo component 'Grocery' to show lazy loading.</h5>
      <hr />
      <h2>This component will have a list of components</h2>
      <hr />
      <h4>Signed In user: {loggedInUser}</h4>
    </div>
  );
};

export default Grocery;
