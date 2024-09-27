import { useState } from "react";

export const Navigation = () => {
  const [activeTab, setActiveTab] = useState("Summary"); // Step 1: Track active tab

  // Step 2: Function to handle click on a tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="mx-[60px] mt-[40px] border-b-[1px] border-b-gray-100">
      <ul className="flex list-none gap-[30px] cursor-pointer h-[43px]">
        {["Summary", "Chart", "Statistics", "Analysis", "Settings"].map(
          (tab) => (
            <li
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`font-normal text-[18px] leading-[22.77px] text-[#6F7177] ${
                activeTab === tab
                  ? "text-[#1A242A] border-b-4 border-[#4B40EE]"
                  : ""
              } inline-block`}
            >
              {tab}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
