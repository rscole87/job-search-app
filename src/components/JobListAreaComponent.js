import React, { useState } from "react";

const JobItem = (props) => {
  const [applied, setApplied] = useState(false);
  const [date, setDate] = useState(props.job.date);
  const [employer, setEmployer] = useState(props.job.employer);
  const [position, setPosition] = useState(props.job.position);
  const [jobSource, setJobSource] = useState(props.job.jobSource);
  const [status, setStatus] = useState(props.job.status);
  const [employerResponse, setEmployerResponse] = useState(props.job.employerResponse);
  const [rejected, setRejected] = useState(false);
  const [offer, setOffer] = useState(false);
  const [notes, setNotes] = useState(props.job.notes);
  const [editing, setEditing] = useState(false);
  const jobItemKey = props.job.key;

  const checkAppliedStatus = () => {
    if (status !== "saved") {
      if (applied !== true) {
        setApplied(true);
        props.setAppliedCount((prev) => prev + 1);
      } else {
        setApplied(true);
      }
    } else {
      if (applied !== false) {
        setApplied(false);
        props.setAppliedCount((prev) => prev - 1);
      } else {
        setApplied(false);
      }
    }
  };

  const checkResponseStatus = (employerResponse) => {
    switch (employerResponse) {
      case "pending": 
        if (rejected === true){
          setRejected(false)
          props.setRejectCount(prev => prev - 1)
        }

        if(offer === true){
          setOffer(false)
          props.setOfferCount(prev => prev - 1)
        }

      case "reject":
        if (rejected !== true) {
          setRejected(true);
          props.setRejectCount((prev) => prev + 1);
        } else {
          setRejected(true);
        }

        if(offer === true){
          props.setOfferCount(prev => prev - 1)
        }
      
        break;
      case "offer":
        if (offer !== true) {
          setOffer(true);
          props.setOfferCount((prev) => prev + 1);
        } else {
          setOffer(true);
        }

        if(rejected === true){
          props.setRejectCount(prev => prev - 1)
        }
        break;
    }
  };

  if (!editing) {
    return (
      <div className="job-item">
        <div className={status.toLowerCase() === "saved" ? "saved-job" : status.toLowerCase() === "applied" ? "applied-job" : status.toLowerCase() === "first-interview" ? "first-interview" : status.toLowerCase() === "second-interview" ? "second-interview" : "third-plus-interview"}>
          <div className="job-details-div">
            <div>
              <p>{`${date} - ${position} - ${employer}`}</p>
            </div>
            <div>
              <p>
                {jobSource} - {status} - {employerResponse}
              </p>
            </div>
            <div className="notes-div">
              <h5 className="notes-header">Notes:</h5>
              <p className="notes-body">{notes}</p>
            </div>
          </div>

          <div>
            <button onClick={() => setEditing(true)}>Edit</button>
            <button onClick={() => props.deleteJobItem(jobItemKey)} >Delete</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <form action="">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" value={employer} placeholder="Employer" onChange={(e) => setEmployer(e.target.value)} />
        <input type="text" value={position} placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
        <input type="text" value={jobSource} placeholder="Source" onChange={(e) => setJobSource(e.target.value)} />

        <select
          name="status"
          id="status"
          value={status ? status : "saved"}
          onChange={(e) => {
            setStatus(e.target.value);
          }}
        >
          <option value="saved">Saved</option>
          <option value="applied">Applied</option>
          <option value="first-interview">1st Interview</option>
          <option value="second-interview">2nd Interview</option>
          <option value="third-plus-interview">3rd+ Interview</option>
        </select>

        <select name="response" id="response" value={employerResponse ? employerResponse : "None"} onChange={(e) => setEmployerResponse(e.target.value)}>
          <option value="pending">Awaiting Response</option>
          <option value="reject">Rejection</option>
          <option value="offer">Offer</option>
        </select>

        <textarea type="text" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            checkAppliedStatus();
            checkResponseStatus(employerResponse);
            setEditing(false);
          }}
        >
          {" "}
          Save{" "}
        </button>
      </form>
    );
  }
};

const JobListArea = (props) => {
  const jobs = props.jobs.map((job, i) => {
    return <JobItem job={job} setAppliedCount={props.setAppliedCount} setRejectCount={props.setRejectCount} setOfferCount={props.setOfferCount} key={job.key} deleteJobItem={props.deleteJobItem}/>;
  });

  return (
    <>
      <div>{jobs}</div>
    </>
  );
};

export default JobListArea;
