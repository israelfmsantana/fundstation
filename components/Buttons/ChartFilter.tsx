import React, { MouseEventHandler } from "react";


interface ChartFilterProps {
    text: string,
    active: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
const ChartFilter: React.FC<ChartFilterProps> = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "bg-blue-600 border-indigo-700 text-slate-100"
          : "border-blue-300 text-blue-300"
      } transition duration-200 hover:bg-blue-400 hover:text-slate-100 hover:border-blue-700`}
    >
      {text}
    </button>

    
  );
};

export default ChartFilter;