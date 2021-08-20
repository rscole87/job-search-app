import React, { useState } from "react";

const InputForm = (props) => {
  const [date, setDate] = useState("");
  const [employer, setEmployer] = useState("");
  const [position, setPosition] = useState("");
  const [jobSource, setJobSource] = useState("");
  const [status, setStatus] = useState("");
  const [employerResponse, setEmployerResponse] = useState("");
  const [notes, setNotes] = useState("");

  let newJob = {
    date,
    employer,
    position,
    jobSource,
    status,
    employerResponse,
    notes,
  };

  const handleSubmit = (job) => {
    props.setJobListData((prev) => prev.concat(job));
    setDate("");
    setEmployer("");
    setPosition("");
    setJobSource("");
    setStatus("");
    setEmployerResponse("");
    setNotes("");
  };

  return (
    <>
      <form action="">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" value={employer} placeholder="Employer" onChange={(e) => setEmployer(e.target.value)} />
        <input type="text" value={position} placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
        <input type="text" value={jobSource} placeholder="Source" onChange={(e) => setJobSource(e.target.value)} />

        <select name="status" id="status" value={status ? status : "Saved"} onChange={(e) => setStatus(e.target.value)}>
          <option value="saved">Saved</option>
          <option value="applied">Applied</option>
          <option value="first-interview">1st Interview</option>
          <option value="second-interview">2nd Interview</option>
          <option value="third-plus-interview">3rd+ Interview</option>
        </select>

        <select name="response" id="response" value={employerResponse ? employerResponse : "None"} onChange={(e) => setEmployerResponse(e.target.value)}>
          <option value=" "> </option>
          <option value="reject">Rejection</option>
          <option value="offer">Offer</option>
        </select>

        <textarea type="text" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(newJob);
          }}
        />
      </form>
    </>
  );
};

export default InputForm;
