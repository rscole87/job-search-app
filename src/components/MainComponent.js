import React, { useEffect, useState } from "react";
import Header from "./HeaderComponent";
import InputForm from "./InputFormComponent";
import JobListArea from "./JobListAreaComponent";

const Main = () => {
  const [jobListData, setJobListData] = useState([]);
  const [appliedCount, setAppliedCount] = useState(jobListData.filter((job) => job.applied).length);
  const [rejectCount, setRejectCount] = useState(jobListData.filter((job) => job.rejected).length);
  const [offerCount, setOfferCount] = useState(jobListData.filter((job) => job.offer).length);

  useEffect(() => {
    if (localStorage.getItem("jobListData")) {
      setJobListData(JSON.parse(localStorage.getItem("jobListData")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobListData", JSON.stringify(jobListData));
    setAppliedCount(jobListData.filter((job) => job.applied).length);
    setRejectCount(jobListData.filter((job) => job.rejected).length);
    setOfferCount(jobListData.filter((job) => job.offer).length);
  }, [jobListData]);

  const deleteJobItem = (key) => {
    setJobListData(jobListData.filter((job) => job.key !== key));
  };

  const updateJobItem = (key, updatedObj) => {
    let updatedJobList = jobListData.map((job) => {
      if (job.key === key) {
        job = updatedObj;
      }
      return job;
    });

    setJobListData(updatedJobList);
  };


  return (
    <>
      <div className="md:container md:mx-auto">
        <Header jobsCount={jobListData.length} appliedCount={appliedCount} rejectCount={rejectCount} offerCount={offerCount} />

        {/* <InputForm jobListData={jobListData} setJobListData={setJobListData} /> */}
        <InputForm jobListData={jobListData} setJobListData={setJobListData} setAppliedCount={setAppliedCount} />

        {/* <JobListArea jobListData={jobListData} deleteJobItem={deleteJobItem} updateJobItem={updateJobItem} appliedCount={appliedCount} rejectCount={rejectCount} offerCount={offerCount} /> */}
        <JobListArea jobListData={jobListData} deleteJobItem={deleteJobItem} updateJobItem={updateJobItem} appliedCount={appliedCount} setAppliedCount={setAppliedCount} rejectCount={rejectCount} setRejectCount={setRejectCount} offerCount={offerCount} setOfferCount={setOfferCount} />
      </div>
    </>
  );
};

export default Main;
