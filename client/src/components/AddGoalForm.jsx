"use client";
import React, { useState } from "react";

export default function AddGoalForm({ addGoal }) {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !deadline) return;
    addGoal({ title, deadline });
    setTitle("");
    setDeadline("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 mb-6"
    >
      <input
        type="text"
        placeholder="Enter skill / goal..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border dark:bg-gray-900 dark:border-gray-700"
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="px-4 py-2 rounded-lg border dark:bg-gray-900 dark:border-gray-700"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        ➕ Add
      </button>
    </form>
  );
}
