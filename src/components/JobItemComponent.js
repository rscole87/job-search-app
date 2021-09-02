import React, { useState } from "react";

const JobItem = (props) => {
  const [applied, setApplied] = useState(props.job.applied);
  const [employer, setEmployer] = useState(props.job.employer);
  const [position, setPosition] = useState(props.job.position);
  const [jobSource, setJobSource] = useState(props.job.jobSource);
  const [status, setStatus] = useState(props.job.status);
  const [url, setUrl] = useState(props.job.url);
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
        if (rejected === true) {
          setRejected(false);
          props.setRejectCount((prev) => prev - 1);
        }

        if (offer === true) {
          setOffer(false);
          props.setOfferCount((prev) => prev - 1);
        }

      case "reject":
        if (rejected !== true) {
          setRejected(true);
          props.setRejectCount((prev) => prev + 1);
        } else {
          setRejected(true);
        }

        if (offer === true) {
          setOffer(false);
          if (props.offerCount > 0) {
            props.setOfferCount((prev) => prev - 1);
          }
        }

        break;
      case "offer":
        if (offer !== true) {
          setOffer(true);
          props.setOfferCount((prev) => prev + 1);
        } else {
          setOffer(true);
        }

        if (rejected === true) {
          setRejected(false);
          if (props.rejectCount > 0) {
            props.setRejectCount((prev) => prev - 1);
          }
        }
        break;
    }
  };

  if (!editing) {
    return (
      <div className={`job-item flex text-center ${jobItemKey % 2 === 0 ? "bg-white" : "bg-gray-50"} `} key={jobItemKey}>
        <div className="px-6 py-4 whitespace-nowrap flex-1">
          <div className="flex items-center justify-center">
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {" "}
                <h4>{position}</h4>
              </div>
              <div className="text-sm text-gray-500 ">{employer}</div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 whitespace-nowrap flex-1">
          <div className="text-sm text-gray-900">{jobSource}</div>
          <div className="text-sm text-gray-500">
            {" "}
            <a href={url}>{url}</a>
          </div>
        </div>

        <div className="px-6 py-4 whitespace-nowrap flex-1">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800 ${status.toLowerCase() === "saved" ? "saved-job" : status.toLowerCase() === "applied" ? "applied-job" : status.toLowerCase() === "first-interview" ? "first-interview" : status.toLowerCase() === "second-interview" ? "second-interview" : "third-plus-interview"}`}>{status}</span>
        </div>

        <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex-1">{notes}</div>

        <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex-1">
          <div>
            <button onClick={() => setEditing(true)}>Edit</button>
          </div>
          <div>
            <button onClick={() => props.deleteJobItem(jobItemKey)}>Delete</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <form action="">
        <input type="text" value={employer} placeholder="Employer" onChange={(e) => setEmployer(e.target.value)} />
        <input type="text" value={position} placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
        <input type="text" value={jobSource} placeholder="Source" onChange={(e) => setJobSource(e.target.value)} />
        <input type="text" value={url} placeholder="URL" onChange={(e) => setUrl(e.target.value)} />

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

export default JobItem;
