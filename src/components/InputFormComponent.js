import React, { useState } from "react";

const InputForm = (props) => {
  const [date, setDate] = useState("");
  const [employer, setEmployer] = useState("");
  const [position, setPosition] = useState("");
  const [jobSource, setJobSource] = useState("");
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState("");
  const [applied, setApplied] = useState(false);
  const [employerResponse, setEmployerResponse] = useState("");
  const [notes, setNotes] = useState("");

  let newJob = {
    date,
    employer,
    position,
    jobSource,
    url,
    status,
    applied,
    employerResponse,
    notes,
    key: props.jobListData.length,
  };

  const handleSubmit = (job) => {
    if(status !== "saved"){
      props.setAppliedCount(prev => prev + 1)
    }
    props.setJobListData((prev) => prev.concat(job));
    setDate("");
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
      <form action="" className="px-8 grid grid-cols-5">
        <div>
          <input type="text" value={position} placeholder="Position" className="p-2"  onChange={(e) => setPosition(e.target.value)} />
          <input type="text" value={employer} placeholder="Employer" className="p-2"  onChange={(e) => setEmployer(e.target.value)} />
        </div>

        <div>
          <input type="text" value={jobSource} placeholder="Source" className="p-2" onChange={(e) => setJobSource(e.target.value)} />
          <input type="text" value={url} placeholder="URL" className="p-2" onChange={(e) => setUrl(e.target.value)} />
        </div>

        <div>
          <select name="status" id="status" value={status ? status : setStatus("saved")} className="p-2" onChange={(e) => {
            setStatus(e.target.value)
            setApplied(e.target.value !== "saved" ? true : false)
            }}>
            <option value="saved">Saved</option>
            <option value="applied">Applied</option>
            <option value="first-interview">1st Interview</option>
            <option value="second-interview">2nd Interview</option>
            <option value="third-plus-interview">3rd+ Interview</option>
          </select>

          <select name="response" id="response" value={employerResponse ? employerResponse : "None"} className="p-2" onChange={(e) => setEmployerResponse(e.target.value)}>
            <option value="pending">Awaiting Response</option>
            <option value="reject">Rejection</option>
            <option value="offer">Offer</option>
          </select>
        </div>

        <div>
          <textarea type="text" placeholder="Notes" className="p-2" rows="1" value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>

        <div>
          <button
            type="submit"
            className="bg-gray-300 py-2 px-4 rounded"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(newJob);
            }}
          >
            Add Job{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default InputForm;
