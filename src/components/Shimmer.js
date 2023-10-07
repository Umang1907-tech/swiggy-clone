import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center mt-28">
      {Array(15)
        .fill("")
        .map((item, index) => {
          return (
            <div
              className="w-[200px] h-[276px] m-3 p-3 border border-1 border-solid border-slate-500"
              key={index}
            >
              <div className="w-[200px] h-[125px]"></div>
              <div className="w-[170px] h-[10px] bg-slate-500 mt-5"></div>
              <div className="w-[110px] h-[10px] bg-slate-500 mt-5"></div>
              <div className="w-[50px] h-[10px] bg-slate-500 mt-5"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
