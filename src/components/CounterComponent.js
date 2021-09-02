import React from 'react'

const Counters = (props) => {
    return (
        <>
            <div className="flex">
                <div className="px-8">
                    <h2>Total Jobs: <span className="font-bold">{props.jobsCount}</span></h2>
                </div>

                <div className="px-8">
                    <h4>Total Applied: <span className="font-bold">{props.appliedCount}</span></h4>
                </div>
                
                <div className="px-8">
                    <h4>Total Rejections: <span className={`font-bold ${props.rejectCount > 0 ? "text-red-600" : ""}`}>{props.rejectCount}</span></h4>
                </div>

                <div className="px-8">
                    <h4>Total Offers: <span className={`font-bold ${props.offerCount > 0 ? "text-green-600" : ""}`}>{props.offerCount}</span></h4>
                </div>
            </div>
        </>
    )
}

export default Counters