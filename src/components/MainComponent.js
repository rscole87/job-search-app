import React, { useState } from "react";
import JOBLIST from "../shared/jobListData";
import Counters from "./CounterComponent";
import InputForm from "./InputFormComponent";
import JobListArea from "./JobListAreaComponent";

const Main = () => {
  const [jobListData, setJobListData] = useState([]);
  const [appliedCount, setAppliedCount] = useState(0);
  const [rejectCount, setRejectCount] = useState(0);
  const [offerCount, setOfferCount] = useState(0);

  return (
    <>
      <Counters jobsCount={jobListData.length} appliedCount={appliedCount} rejectCount={rejectCount} offerCount={offerCount} />

      <InputForm  setJobListData={setJobListData}/>

      <JobListArea jobs={jobListData} setAppliedCount={setAppliedCount} setRejectCount={setRejectCount} setOfferCount={setOfferCount}/>
    </>
  );
};

export default Main;
