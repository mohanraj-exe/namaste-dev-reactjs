import { useContext } from "react";
import UserContext from "../utils/userContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);

 return (
    <div className="grocery-container">
      <h2>{loggedInUser}</h2>
      <h2>This component will have a list of components</h2>
    </div>
  );
};

export default Grocery;
