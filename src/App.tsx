// import CouterReduxTest from "./components/CouterReduxTest";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import CampaignsApi from "./api/apiCampaigns";

const App = () => {
  useEffect(() => {
    CampaignsApi.getAll().then((res) => console.log(res.data.map(item => (item.title)))
    )
  }, [])
  return (
    <>
      {/* <CouterReduxTest></CouterReduxTest> */}

      <div className="text-text1 font-extrabold text-2xl">Main</div>
      <Link to={"/sign-up"}>
        sign up
      </Link>
    </>
  );
};

export default App;
