import React from "react";
import Counters from "./CounterComponent";

const Header = (props) => {
  return (
    <div className="px-8 flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-gray-500 text-7xl font-extrabold">JobR</h1>
      </div>
      <div className="flex-1 flex justify-around">
        <Counters jobsCount={props.jobsCount} appliedCount={props.appliedCount} rejectCount={props.rejectCount} offerCount={props.offerCount} />
      </div>
    </div>
  );
};

export default Header;
