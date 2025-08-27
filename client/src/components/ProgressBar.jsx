"use client";
import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="mt-4">
      <p className="text-sm font-medium mb-2">Progress: {progress}%</p>
      <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
