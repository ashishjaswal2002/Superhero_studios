import React from "react";

export const AlertComponent = () => {
  return (
    <div className="alert z-10">
    <p className="font-bold">Alert! 🚨</p>
    <div className="bg-red-400 text-white">
      <p className="text-lg p-2 text-center">
        Apologies. Some of the information you are looking for is currently unavailable.
      </p>
    </div>
  </div>
  );
};
