import CouterReduxTest from "./components/CouterReduxTest";

import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="text-text1 font-extrabold text-2xl">Main</div>
      <Link to={"/sign-up"}>
        sign up
      </Link>
    </>
  );
};

export default App;
