import React, { useState } from "react";
import JOBLIST from "../shared/jobListData";
import Header from "./HeaderComponent";
import InputForm from "./InputFormComponent";
import JobListArea from "./JobListAreaComponent";
import useLocalStorage from "./hooks/useLocalStorage";

const Main = () => {
  const [jobListData, setJobListData] = useLocalStorage("jobList", JOBLIST);
  const [appliedCount, setAppliedCount] = useState(
    jobListData.filter(job => job.applied).length);
  const [rejectCount, setRejectCount] = useState(0);
  const [offerCount, setOfferCount] = useState(0);

  const deleteJobItem = (key) => {
    setJobListData(jobListData.filter(job => job.key !== key))
  }

  return (
    <>
      <Header jobsCount={jobListData.length} appliedCount={appliedCount} rejectCount={rejectCount} offerCount={offerCount} />

      <InputForm jobListData={jobListData}  setJobListData={setJobListData}/>

      <JobListArea jobs={jobListData} deleteJobItem={deleteJobItem} setAppliedCount={setAppliedCount} setRejectCount={setRejectCount} setOfferCount={setOfferCount}/>
    </>
  );
};

export default Main;
