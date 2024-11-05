import React, { useState } from "react";

function Button() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const options = [
    "BTC", "ETH", "MATIC", "XRP", "DOGE", "ADA", "BNB", "LTC", "SOL", "DOT"
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className="flex space-x-4 items-center p-4  text-white">
      {/* Button 1: Static "INR" button */}
      <select className="px-6 py-2 bg-[#2e3241] rounded">
        <option value="INR" className="bg-white" >INR</option>
      </select>

      {/* Button 2: Dropdown menu */}
      <div className="relative">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="px-6 py-2 bg-[#2e3241] rounded"
        >
          {selectedOption || "BTC"}
        </button>
        {showOptions && (
          <div className="absolute mt-2 w-full bg-white text-black rounded shadow-lg">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                className="px-6 py-2 hover:bg-gray-200 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Button 3: "Buy" followed by selected option */}
      <button className="px-6 py-2 bg-[#2e3241] rounded">
        {selectedOption ? `Buy ${selectedOption}` : "Buy BTC"}
      </button>
    </div>
  );
}

export default Button;
