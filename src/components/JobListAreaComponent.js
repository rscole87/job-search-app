import React, { useState } from "react";

const JobItem = (props) => {
  const [applied, setApplied] = useState(false);
  const [date, setDate] = useState(props.job.date);
  const [employer, setEmployer] = useState(props.job.employer);
  const [position, setPosition] = useState(props.job.position);
  const [jobSource, setJobSource] = useState(props.job.jobSource);
  const [status, setStatus] = useState(props.job.status);
  const [employerResponse, setEmployerResponse] = useState(props.job.employerResponse);
  const [notes, setNotes] = useState(props.job.notes);
  const [editing, setEditing] = useState(false);

  if (!editing){
    return (
      <div>
        <table>
          <tr className={status === 'saved' ? "saved-job" 
            : status === 'applied' ? "applied-job" 
            : status === 'first-interview' ? "first-interview"
            : status === 'second-interview' ? "second-interview" 
            : "third-plus-interview"  
            }>
            <td>{date}</td>
            <td>{employer}</td>
            <td>{position}</td>
            <td>{jobSource}</td>
            <td>{status}</td>
            <td>{employerResponse}</td>
            <td>{notes}</td>
          <button onClick={() => setEditing(true)}>Edit</button>
          </tr>
        </table>
      </div>
    );
  } else {
    return (
      <form action="">
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" value={employer} placeholder="Employer" onChange={(e) => setEmployer(e.target.value)} />
        <input type="text" value={position} placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
        <input type="text" value={jobSource} placeholder="Source" onChange={(e) => setJobSource(e.target.value)} />

        <select name="status" id="status" value={status ? status : "saved"} onChange={(e) => setStatus(e.target.value)}>
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
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setEditing(false)
          }}> Save </button>
      </form>
    )
  }
};

const JobListArea = (props) => {
  const jobs = props.jobs.map((job) => {
    return <JobItem job={job} />;
  });

  return (
    <>
      <div>{jobs}</div>
    </>
  );
};

export default JobListArea;
