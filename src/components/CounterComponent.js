import React from 'react'

const Counters = (props) => {
    return (
        <>
            <div>
                <div>
                    <h2>Total Jobs: {props.jobsCount}</h2>
                </div>

                <div>
                    <h4>Total Applied: {props.appliedCount}</h4>
                </div>
                
                <div>
                    <h4>Total Rejections: {props.rejectCount}</h4>
                </div>

                <div>
                    <h4>Total Offers: {props.offerCount}</h4>
                </div>
            </div>
        </>
    )
}

export default Counters