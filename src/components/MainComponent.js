import React, { useState } from "react";
import InputForm from "./InputFormComponent";

const Main = () => {
    const [jobList, setJobList] = useState([])
    const [appliedCount, setAppliedCount] = useState(0)
    const [rejectCount, setRejectCount] = useState(0)
    const [offerCount, setOfferCount] = useState(0)

    return (
        <>
            <InputForm />
        </>
    )
}

export default Main;