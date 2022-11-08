import React from "react";

const Statistics = () => {
  return (
    <div className="text-center py-10">
      <div className="stats w-9/12  stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">
            <p className="text-black font-bold">Trusted Clients</p>
          </div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">
            <p className="text-black font-bold">Recoverd For Our Clients</p>
          </div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">
            <p className="text-black font-bold">Successfull Cases</p>
          </div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
