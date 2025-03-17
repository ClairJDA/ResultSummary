import Image from "next/image";
import React from "react";

function DetailItem({category, score, icon, bgColor, fontColor}) {
  
  return (
    <div className={`h-fit px-4 py-2 flex justify-between rounded-lg ${bgColor}`}>
      <div className="flex">
        <Image src={icon} alt="icon" width={20} height={20} />
        <p className={`pl-2 font-bold ${fontColor}`}>{category}</p>
      </div>

      <p className="text-sm font-bold text-dark-gray-blue">
        {score} <span className="text-dark-gray-blue/60">/ 100</span>
      </p>
    </div>
  );
}

export default DetailItem;
