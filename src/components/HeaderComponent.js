import React from "react";
import Counters from "./CounterComponent";

const Header = (props) => {
  return (
    <div className="px-8 grid grid-cols-1 md:grid-cols-2 flex items-center justify-between">
      <div className="flex-1 mb-10">
        <h1 className="text-gray-500 text-6xl mb-0 md:text-7xl font-extrabold md:mt-10 ">J.O.B.S.</h1>
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider md:text-base">Just Offer the Best Service</p>
      </div>
      <div className="flex-1 flex justify-around mb-8 md:mb-0">
        <Counters jobsCount={props.jobsCount} appliedCount={props.appliedCount} rejectCount={props.rejectCount} offerCount={props.offerCount} />
      </div>
    </div>
  );
};

export default Header;
