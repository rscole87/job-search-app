import React, { useEffect, useState } from "react";
import Header from "./HeaderComponent";
import InputForm from "./InputFormComponent";
import JobListArea from "./JobListAreaComponent";

const Main = () => {
  const [jobListData, setJobListData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("jobListData")) {
      setJobListData(JSON.parse(localStorage.getItem("jobListData")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobListData", JSON.stringify(jobListData));
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
      <div className="md:container md:mx-auto pb-52">
        <Header jobsCount={jobListData.length} 
          appliedCount={jobListData.filter((job) => job.applied).length} 
          rejectCount={jobListData.filter((job) => job.rejected).length} 
          offerCount={jobListData.filter((job) => job.offer).length} 
        />
        
        <InputForm jobListData={jobListData} setJobListData={setJobListData} />

        <JobListArea jobListData={jobListData} 
          deleteJobItem={deleteJobItem} 
          updateJobItem={updateJobItem}  
          appliedCount={jobListData.filter((job) => job.applied).length} 
          rejectCount={jobListData.filter((job) => job.rejected).length} 
          offerCount={jobListData.filter((job) => job.offer).length}
        />
      </div>
    </>
  );
};

export default Main;
