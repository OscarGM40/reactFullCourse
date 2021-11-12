import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage: "url(https://picsum.photos/200/300?random=1)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ex
          voluptates ducimus laborum ullam.
        </p>
      </div>

      <div className="journal__entry-date-box">
         <span>Monday</span>
         <h4>28</h4>
      </div>
    </div>
  );
};
