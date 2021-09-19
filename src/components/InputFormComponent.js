import React, { useState } from "react";

const InputForm = (props) => {
  const [employer, setEmployer] = useState("");
  const [applied, setApplied] = useState(false);
  const [offer, setOffer] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [position, setPosition] = useState("");
  const [jobSource, setJobSource] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [employerResponse, setEmployerResponse] = useState("pending");
  const [notes, setNotes] = useState("");

  let newJob = {
    employer,
    position,
    jobSource,
    url,
    status,
    applied,
    offer,
    rejected,
    employerResponse,
    notes,
    key: `${employer[0]}${position[0]}${props.jobListData.length}`,
  };

  const handleSubmit = (job) => {
    props.setJobListData((prev) => prev.concat(job));
    setEmployer("");
    setPosition("");
    setJobSource("");
    setUrl("");
    setStatus("");
    setEmployerResponse("");
    setNotes("");
  };

  return (
    <>
      <p className="px-8 mb-4 text-xs font-bold text-gray-500 ">Enter job details in the form below.</p>
      <form action="" className="px-8 flex flex-col md:grid md:grid-cols-5">
        <div className="flex col-span-2">
          <div className="md:flex-1">
            <input type="text" value={position} placeholder="Position:" className="md:p-2" onChange={(e) => setPosition(e.target.value)} />
            <input type="text" value={employer} placeholder="Employer:" className="md:p-2" onChange={(e) => setEmployer(e.target.value)} />
          </div>

          <div className="md:flex-1">
            <input type="text" value={jobSource} placeholder="Source:" className="md:p-2" onChange={(e) => setJobSource(e.target.value)} />
            <input type="text" value={url} placeholder="URL:" className="md:p-2" onChange={(e) => setUrl(e.target.value)} />
          </div>
        </div>

        <div className="flex my-2 md:my-0">
          <select
            name="status"
            id="status"
            value={status ? status : setStatus("saved")}
            className="p-2"
            onChange={(e) => {
              setStatus(e.target.value);
              if (e.target.value === "saved") {
                setApplied(false);
              } else {
                setApplied(true);
              }
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
            className={`p-2 ${!newJob.applied ? "hidden" : ""}`}
            onChange={(e) => {
              setEmployerResponse(e.target.value);
              if (e.target.value === "pending") {
                setOffer(false)
                setRejected(false)
              } else if (e.target.value === "offer") {
                setOffer(true);
                setRejected(false)
              } else {
                setRejected(true);
                setOffer(false);
              }
            }}
          >
            <option value="pending">Awaiting Response</option>
            <option value="reject">Rejection</option>
            <option value="offer">Offer</option>
          </select>
        </div>

        <div className="flex flex-col text-center md:flex-row md:col-span-2 justify-around">
          <div className="flex-grow">
            <textarea type="text" placeholder="Notes" className="p-2 mx-auto" rows="1" value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>

          <div className="flex-shrink">
            <button
              type="submit"
              className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-full"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(newJob);
              }}
            >
              Add Job{" "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default InputForm;
