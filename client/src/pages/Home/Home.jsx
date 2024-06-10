import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import MainTweet from "../../components/MainTweet/MainTweet";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Signin from "../Signin/Signin";
import Navbar from "../../components/Navbar/Navbar";

import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {!currentUser ? (
        <Signin />
      ) : (
        <>
        
        <div className="grid grid-cols-2 md:grid-cols-6 md:col-span-4 pt-6">
  <div className="col-span-2 md:col-span-1 px-3 md:px-6">
    <LeftSidebar />
  </div>
  <div className="col-span-6 md:col-span-4 border-x-2 border-t-slate-800 px-6">
    <MainTweet />
  </div>
  <div className="hidden md:block md:col-span-1 px-6">
    <RightSidebar />
  </div>
</div>

        </>
      )}
    </>
  );
};

export default Home;
