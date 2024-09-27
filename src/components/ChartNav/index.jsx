import { useState } from "react";
import { leftOptions, rightOptions } from "../../data/index.jsx";

const ChartNav = () => {
  const [active, setActive] = useState(1);
  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <div className="mx-[60px] mt-[60px] w-[750px] ">
      <div className="flex justify-between items-center">
        <div className="leftOptions flex items-center w-1/2 space-x-[35px]">
          {" "}
          {/* Set width to 50% */}
          {leftOptions &&
            leftOptions.map((option) => (
              <li
                key={option?.id}
                className="flex items-center font-normal text-[18px] leading-[22.77px] text-[#6F7177] list-none cursor-pointer"
              >
                <span className="w-[24px] h-[24px] mr-[10px] flex items-center">
                  {option?.icon}
                </span>
                {option?.optName}
              </li>
            ))}
        </div>
        <div className="rightOptions flex items-center justify-between w-1/2">
          {" "}
          {/* Set width to 50% and use justify-between */}
          {rightOptions &&
            rightOptions.map((option) => (
              <li
                key={option.id} // Ensure to add a unique key prop
                className={`flex items-center list-none text-[18px] leading-[22.77px] font-normal text-[#6F7177] cursor-pointer ${
                  active === option.id
                    ? "border rounded-[5px] bg-[#4B40EE] border-[#4B40EE] text-white p-1"
                    : ""
                }`} // Removed gap since justify-between handles spacing
                onClick={() => handleClick(option.id)} // Added click handler
              >
                {option?.optName}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChartNav;
