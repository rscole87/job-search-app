import React from "react";
import JobItem from "./JobItemComponent";


const JobListArea = (props) => {
  const jobs = props.jobs.map((job, i) => {
    return <JobItem job={job} appliedCount={props.appliedCount} setAppliedCount={props.setAppliedCount} rejectCount={props.rejectCount} setRejectCount={props.setRejectCount} offerCount={props.offerCount} setOfferCount={props.setOfferCount} key={job.key} deleteJobItem={props.deleteJobItem} />;
  });

  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <div className="min-w-full divide-y divide-gray-200">
                <div className="bg-gray-50">
                  <div className="flex ">
                    <div className="px-6 py-3 flex-1 text-left text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                      Position
                    </div>
                    <div className="px-6 py-3 flex-1 text-left text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                      Source
                    </div>
                    <div className="px-6 py-3 flex-1 text-left text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                      Status
                    </div>
                    <div className="px-6 py-3 flex-1 text-left text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                      Notes
                    </div>
                    <div className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex-1"></div>
                  </div>
                </div>
                {jobs}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListArea;
