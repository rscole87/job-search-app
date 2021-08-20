import React from "react";

const JobListArea = (props) => {
  const jobs = props.jobs.map((job) => {
    return (
      <div>
        <table>
          <tr>
            <td>{job.date}</td>
            <td>{job.employer}</td>
            <td>{job.position}</td>
            <td>{job.jobSource}</td>
            <td>{job.status}</td>
            <td>{job.employerResponse}</td>
            <td>{job.notes}</td>
          </tr>
        </table>
      </div>
    );
  });

  return (
    <>
      <div>{jobs}</div>
    </>
  );
};

export default JobListArea;
