import React from "react";
import DetailItem from "./detailItem";
import data from "../data";

function SummaryDetail() {
  return (
    <div className="w-full h-1/2 md:w-1/2 px-10 p-4 md:p-4 flex flex-col justify-evenly md:gap-y-5 bg-white rounded-2xl">
      <h1 className="text-lg text-dark-gray-blue">Summary</h1>
      <div className="flex flex-col justify-around gap-y-5">
        {data.map((item) => (
          <DetailItem
            key={item.category}
            category={item.category}
            score={item.score}
            icon={item.icon}
            bgColor={item.bgcolor}
            fontColor={item.fontcolor}
          />
        ))}
      </div>

      <button
        className="mt-4 py-3 btn-hover bg-dark-gray-blue hover:cursor-pointer text-white rounded-full"
        style={{ backgroundColor: "100%" }}
      >
        Continue
      </button>
    </div>
  );
}

export default SummaryDetail;
