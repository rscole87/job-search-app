import React, { useState } from "react";

const JobItem = (props) => {
  const [employer, setEmployer] = useState(props.job.employer);
  const [position, setPosition] = useState(props.job.position);
  const [jobSource, setJobSource] = useState(props.job.jobSource);
  const [status, setStatus] = useState(props.job.status);
  const [url, setUrl] = useState(props.job.url);
  const [employerResponse, setEmployerResponse] = useState(props.job.employerResponse);
  const [notes, setNotes] = useState(props.job.notes);
  const [notesCollapsed, setNotesCollapsed] = useState(window.innerWidth <= 575 ? true : false);
  const [editing, setEditing] = useState(false);
  const jobItemKey = props.job.key;
  
  let updatedJobItemData = {
    employer,
    position,
    jobSource,
    url,
    status,
    applied: props.job.applied ? props.job.applied : null,
    offer: props.job.offer ? props.job.offer : null,
    rejected: props.job.rejected ? props.job.rejected : null,
    employerResponse,
    notes,
    key: jobItemKey,
  };
  
  const setApplied = (status) => {
    console.log(status)
    if(status === "saved"){
      updatedJobItemData.applied = false;
    } else {
      updatedJobItemData.applied = true;
    }
    props.updateJobItem(jobItemKey ,updatedJobItemData)
  };
  
  const setOffer = (bool) => {
    updatedJobItemData.offer = bool;
    updatedJobItemData.rejected = !bool;
    props.updateJobItem(jobItemKey ,updatedJobItemData)
  };
  
  const setPending = () => {
    updatedJobItemData.rejected = false;
    updatedJobItemData.offer = false;
    props.updateJobItem(jobItemKey ,updatedJobItemData)
  }

  const handleDelete = () => {
    props.deleteJobItem(jobItemKey);
  };

  const handleUpdate = (updatedJobItemData) => {
    props.updateJobItem(jobItemKey, updatedJobItemData);
  };

  const toggleNotesCollapse = () => {
    setNotesCollapsed(!notesCollapsed);
  };

  if (!editing) {
    return (
      <div className={`job-item flex flex-col md:grid md:grid-cols-5 flex-wrap md:flex-nowrap text-center ${updatedJobItemData.offer ? "bg-green-100" : ""} ${updatedJobItemData.rejected ? "bg-red-100" : ""} `} key={jobItemKey}>
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
            <div className="text-sm text-gray-400">
              <a href={url} className=" px-4 py-1 rounded border-2 border-gray-300 hover:text-gray-500 hover:border-gray-500 ">
                {jobSource}
              </a>
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
        <div className="flex pt-2 md:pt-2 md:col-span-2 md:justify-around">
          <div className="text-center md:flex md:flex-col">
            <input type="text" value={position} placeholder="Position" className="text-center" onChange={(e) => setPosition(e.target.value)} />
            <input type="text" value={employer} placeholder="Employer" className="text-center" onChange={(e) => setEmployer(e.target.value)} />
          </div>

          <div className="text-center md:flex md:flex-col">
            <input type="text" value={jobSource} placeholder="Source" className="text-center" onChange={(e) => setJobSource(e.target.value)} />
            <input type="text" value={url} placeholder="URL" className="text-center" onChange={(e) => setUrl(e.target.value)} />
          </div>
        </div>

        <div className="text-center my-2 md:flex md:flex-col md:my-0">
          <select
            name="status"
            id="status"
            value={status ? status : "saved"}
            className="p-2"
            onChange={(e) => {
              setStatus(e.target.value);
              setApplied(e.target.value);
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
            value={employerResponse}
            className="p-2"
            onChange={(e) => {
              setEmployerResponse(e.target.value);
              if(e.target.value === "pending"){
                setPending()
              } else if (e.target.value === "offer"){
                setOffer(true)
              } else {
                setOffer(false)
              }
            }}
          >
            <option value="pending" defaultValue>
              Awaiting Response
            </option>
            <option value="reject">Rejection</option>
            <option value="offer">Offer</option>
          </select>
        </div>

        <div className="flex flex-col text-center md:flex-row md:col-span-2 md:justify-between">
          <div className="text-center md:ml-8">
            <textarea type="text" placeholder="Notes" value={notes} className="p-2" rows="1" onChange={(e) => setNotes(e.target.value)} />
          </div>

          <div className="col-span-2 flex justify-around">
            <button
              type="submit"
              className="bg-green-200 py-2 px-4 rounded mb-3"
              onClick={(e) => {
                e.preventDefault();
                handleUpdate(updatedJobItemData);
                setEditing(false);
                console.log(props.jobListData)
              }}
            >
              Save{" "}
            </button>
          </div>
        </div>
      </form>
    );
  }
};

export default JobItem;
