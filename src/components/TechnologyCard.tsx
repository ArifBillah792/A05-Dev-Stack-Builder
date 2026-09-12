import React from "react";

const TechnologyCard = () => {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col gap-4">
      {/* Icon + badge row */}

      <div className="flex items-center justify-between">
        <img src="" alt="Technology icon" className="h-8 w-8" />
        <span className="badge badge-info badge-outline rounded-full text-xs px-3">
          Badge
        </span>
      </div>

      {/* Name */}

      <h3 className="text-lg font-bold text-gray-900">Technology Name</h3>

      {/* Description */}

      <p className="text-sm text-gray-500">
        Short description goes here explaining what this technology does.
      </p>

      {/* Meta row (Category, Difficulty, Rating) */}

      <div className="flex items-center justify-between text-sm">
        <span className="badge badge-ghost rounded-md text-xs">Category</span>
        <span className="text-gray-500">Difficulty</span>
        <span className="flex items-center gap-1 text-gray-700">⭐ 0.0</span>
      </div>

      {/* Button */}

      <button className="btn btn-neutral w-full rounded-xl ">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;
