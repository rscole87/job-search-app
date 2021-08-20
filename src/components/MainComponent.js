import React, { useState } from "react";
import InputForm from "./InputFormComponent";
import Counters from "./CounterComponent";

const Main = () => {
    const [jobList, setJobList] = useState([])
    const [appliedCount, setAppliedCount] = useState(0)
    const [rejectCount, setRejectCount] = useState(0)
    const [offerCount, setOfferCount] = useState(0)
    const [date, setDate] = useState('')
    const [employer, setEmployer] = useState('')
    const [position, setPosition] = useState('')
    const [jobSource, setJobSource] = useState('')
    const [status, setStatus] = useState('')
    const [employerResponse, setEmployerResponse] = useState('')
    const [notes, setNotes] = useState('')

    return (
        <>
            <Counters 
                jobsCount={jobList.length} 
                appliedCount={appliedCount} 
                rejectCount={rejectCount} 
                offerCount={offerCount}    
            />


            <InputForm 
                setDate={setDate} 
                setEmployer={setEmployer} 
                setPosition={setPosition} 
                setJobSource={setJobSource} 
                setStatus={setStatus} 
                setEmployerResponse={setEmployerResponse} 
                setNotes={setNotes} 
            />

            {date}
            {employer}
            {position}
            {jobSource}
            {status}
            {employerResponse}
            {notes}
        </>
    )
}

export default Main;