import React from "react";
import CounterItem from "./CounterItem";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constansts.js";

const CounterList = () => {
  
  const navigate = useNavigate();
  
  const handleBCClick = () => {
    navigate(ROUTES.COUNT);
  }
  
  return (
    <section className="self-center mt-2.5 w-full font-semibold">
      <CounterItem onClick={handleBCClick} title="BC Robx Counter"/>
      <div className="mt-4">
        <CounterItem onClick={()=>{}} title="TBC Robx Counter"/>
      </div>
      <div className="mt-4">
        <CounterItem onClick={()=>{}} title="OBC Robx Counter"/>
      </div>
    </section>
  );
};

export default CounterList;
