import React from "react";

function ResultScore() {
  return (
    <div className="w-full h-1/2 md:h-full md:w-1/2 py-8 px-12 md:p-4 flex flex-col justify-center items-center gap-y-5 bg-gradient rounded-b-2xl md:rounded-2xl">
      <p className="text-light-lavender">Your Result</p>
      <div className="w-32 h-32 flex flex-col justify-center items-center rounded-full bg-circle">
        <p className="text-5xl text-white font-bold">76</p>
        <p className="text-sm text-light-lavender">of 100</p>
      </div>
      <p className="text-xl text-white font-bold">Great</p>
      <p className="text-sm text-light-lavender text-center">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default ResultScore;
