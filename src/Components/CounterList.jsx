import React from "react";
import CounterItem from "./CounterItem";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants.js";

const CounterList = () => {
  
  const navigate = useNavigate();
  
  const handleBCClick = (title) => {
    navigate(ROUTES.COUNT, {
      state: {
        title
      }
    });
  }
  
  return (
    <section className="self-center mt-2.5 w-full font-semibold">
      <CounterItem onClick={() => {
        handleBCClick("BC Daily Rbx Counter");
      }} title="BC Robx Counter"/>
      <div className="mt-4">
        <CounterItem onClick={() => {
          handleBCClick("TBC Daily Rbx Counter");
        }} title="TBC Robx Counter"/>
      </div>
      <div className="mt-4">
        <CounterItem onClick={() => {
          handleBCClick("OBC Daily Rbx Counter");
        }} title="OBC Robx Counter"/>
      </div>
    </section>
  );
};

export default CounterList;
