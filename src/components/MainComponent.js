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
      <div className="md:container md:mx-auto">

      <Header jobsCount={jobListData.length} appliedCount={appliedCount} rejectCount={rejectCount} offerCount={offerCount} />

      <InputForm jobListData={jobListData}  setJobListData={setJobListData} setAppliedCount={setAppliedCount}/>

      <JobListArea jobs={jobListData} deleteJobItem={deleteJobItem} appliedCount={appliedCount} setAppliedCount={setAppliedCount} rejectCount={rejectCount} setRejectCount={setRejectCount} offerCount={offerCount} setOfferCount={setOfferCount}/>
      </div>
    </>
  );
};

export default Main;
