import React from 'react'

const Counters = (props) => {
    return (
        <>
            <div className="flex">
                <div className="px-8">
                    <h2>Total Jobs: {props.jobsCount}</h2>
                </div>

                <div className="px-8">
                    <h4>Total Applied: {props.appliedCount}</h4>
                </div>
                
                <div className="px-8">
                    <h4>Total Rejections: {props.rejectCount}</h4>
                </div>

                <div className="px-8">
                    <h4>Total Offers: {props.offerCount}</h4>
                </div>
            </div>
        </>
    )
}

export default Counters