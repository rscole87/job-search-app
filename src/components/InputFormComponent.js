import React, { useState } from "react";

const InputForm = () => {
    const [date, setDate] = useState('')
    const [employer, setEmployer] = useState('')
    const [position, setPosition] = useState('')
    const [jobsource, setJobSource] = useState('')
    const [status, setStatus] = useState('')
    const [employerResponse, setEmployerResponse] = useState('')
    const [notes, setNotes] = useState('')
    

  return (
    <>
      <form action="">
        <input type="date" />
        <input type="text" placeholder="Employer" />
        <input type="text" placeholder="Position" />
        <input type="text" placeholder="Source" />

        <select name="status" id="status">
          <option value="saved">Saved</option>
          <option value="applied">Applied</option>
          <option value="first-interview">1st Interview</option>
          <option value="second-interview">2nd Interview</option>
          <option value="third-plus-interview">3rd+ Interview</option>
        </select>

        <select name="response" id="">
          <option value=" "> </option>
          <option value="reject">Rejection</option>
          <option value="offer">Offer</option>
        </select>

        <textarea type="text" placeholder="Notes" />
        <input type="submit" />
      </form>
    </>
  );
};

export default InputForm;
