import React, { useState } from "react";

const InputForm = (props) => {

  return (
    <>
      <form action="">
        <input type="date" onChange={(e) => props.setDate(e.target.value)} />
        <input type="text" placeholder="Employer" onChange={(e) => props.setEmployer(e.target.value)}/>
        <input type="text" placeholder="Position" onChange={(e) => props.setPosition(e.target.value)}/>
        <input type="text" placeholder="Source" onChange={(e) => props.setJobSource(e.target.value)}/>

        <select name="status" id="status" onChange={(e) => props.setStatus(e.target.value)}>
          <option value="saved">Saved</option>
          <option value="applied">Applied</option>
          <option value="first-interview">1st Interview</option>
          <option value="second-interview">2nd Interview</option>
          <option value="third-plus-interview">3rd+ Interview</option>
        </select>

        <select name="response" id="response" onChange={(e) => props.setEmployerResponse(e.target.value)}>
          <option value=" "> </option>
          <option value="reject">Rejection</option>
          <option value="offer">Offer</option>
        </select>

        <textarea type="text" placeholder="Notes" onChange={(e) => props.setNotes(e.target.value)}/>
        <input type="submit" />
      </form>
    </>
  );
};

export default InputForm;
