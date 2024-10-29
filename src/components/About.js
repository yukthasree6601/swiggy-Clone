import { useContext } from "react";
import Usercontext from "../utils/Usercontext";
const About = () => {
  const { loggedInUser } = useContext(Usercontext);
  return (
    <div>
      <h1>About</h1>
      <p>welcome to about</p>
      <h4 className="text-xl font-bold">{loggedInUser}</h4>
    </div>
  );
};
export default About;
