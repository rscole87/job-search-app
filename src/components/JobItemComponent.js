import React, { useState } from "react";

const JobItem = (props) => {
  const [applied, setApplied] = useState(props.job.applied);
  const [employer, setEmployer] = useState(props.job.employer);
  const [position, setPosition] = useState(props.job.position);
  const [jobSource, setJobSource] = useState(props.job.jobSource);
  const [status, setStatus] = useState(props.job.status);
  const [url, setUrl] = useState(props.job.url);
  const [employerResponse, setEmployerResponse] = useState(props.job.employerResponse);
  const [rejected, setRejected] = useState(props.job.rejected);
  const [offer, setOffer] = useState(props.job.offer);
  const [notes, setNotes] = useState(props.job.notes);
  const [notesCollapsed, setNotesCollapsed] = useState(window.innerWidth <= 575 ? true : false);
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
          if (props.rejectCount > 0) {
            props.setRejectCount((prev) => prev - 1);
          }
        }

        if (offer === true) {
          setOffer(false);
          if (props.offerCount > 0) {
            props.setOfferCount((prev) => prev - 1);
          }
        }
        break;

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

  const handleDelete = () => {
    if (applied && props.appliedCount > 0) {
      props.setAppliedCount((prev) => prev - 1);
    }

    if (rejected && props.rejectCount > 0) {
      props.setRejectCount((prev) => prev - 1);
    }

    if (offer && props.offerCount > 0) {
      props.setOfferCount((prev) => prev - 1);
    }

    props.deleteJobItem(jobItemKey);
  };

  const toggleNotesCollapse = () => {
    setNotesCollapsed(!notesCollapsed);
    console.log(notesCollapsed);
    console.log(window.innerWidth);
  };

  if (!editing) {
    return (
      <div className={`job-item flex flex-col md:grid md:grid-cols-5 flex-wrap md:flex-nowrap text-center ${offer ? "bg-green-100" : ""} ${rejected ? "bg-red-100" : ""} `} key={jobItemKey}>
        <div className="flex col-span-2">
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
        </div>

        <div className="px-3 md:px-6 md:py-4 whitespace-nowrap flex-none md:flex-1">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-green-800 ${status.toLowerCase() === "saved" ? "saved-job" : status.toLowerCase() === "applied" ? "applied-job" : status.toLowerCase() === "first-interview" ? "first-interview" : status.toLowerCase() === "second-interview" ? "second-interview" : "third-plus-interview"}`}>{status}</span>
        </div>

        <div className={`${notesCollapsed ? "hidden" : "block"} md:flex-none`}>
          <div className={`px-3 py-2 mx-auto md:px-6 md:py-4 whitespace-normal text-sm text-gray-500 flex-grow md:flex-1 max-w-xs }`}>{notes}</div>
        </div>

        <div className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium md:flex-grow flex justify-around md:justify-end">
          <button className="block md:hidden" onClick={() => toggleNotesCollapse()}>
            {notesCollapsed ? "View" : "Hide"} Notes
          </button>

          <div>
            <button className="mx-4 md:flex-none" onClick={() => setEditing(true)}>
              Edit
            </button>
          </div>

          <div>
            <button className="md:flex-none" onClick={() => handleDelete()}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <form action="" className="text-sm px-8 flex flex-col md:text-md md:grid md:grid-cols-5">
        <div className="flex pt-2 md:pt-0">
          <div className="text-center">
            <input type="text" value={position} placeholder="Position" className="text-center" onChange={(e) => setPosition(e.target.value)} />
            <input type="text" value={employer} placeholder="Employer" className="text-center" onChange={(e) => setEmployer(e.target.value)} />
          </div>

          <div className="text-center">
            <input type="text" value={jobSource} placeholder="Source" className="text-center" onChange={(e) => setJobSource(e.target.value)} />
            <input type="text" value={url} placeholder="URL" className="text-center" onChange={(e) => setUrl(e.target.value)} />
          </div>
        </div>

        <div className="text-center my-2 md:my-0">
          <select
            name="status"
            id="status"
            value={status ? status : "saved"}
            className="p-2"
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

          <select
            name="response"
            id="response"
            value={employerResponse ? employerResponse : "None"}
            className="p-2"
            onChange={(e) => {
              setEmployerResponse(e.target.value);
            }}
          >
            <option value="pending">Awaiting Response</option>
            <option value="reject">Rejection</option>
            <option value="offer">Offer</option>
          </select>
        </div>

        <div className="text-center">
          <textarea type="text" placeholder="Notes" value={notes} className="p-2" rows="1" onChange={(e) => setNotes(e.target.value)} />
        </div>

        <div className="col-span-2 flex justify-around">
          <button
            type="submit"
            className="bg-green-200 py-2 px-4 rounded mb-3"
            onClick={(e) => {
              e.preventDefault();
              checkAppliedStatus();
              checkResponseStatus(employerResponse);
              setEditing(false);
            }}
          >
            Save{" "}
          </button>
        </div>
      </form>
    );
  }
};

export default JobItem;
