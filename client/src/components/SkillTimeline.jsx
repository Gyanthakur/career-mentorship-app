"use client";
import React from "react";

export default function SkillTimeline({ goals }) {
  if (goals.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">📅 Timeline / Calendar View</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="p-4 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
          >
            <h3 className="font-medium">{goal.title}</h3>
            <p className="text-sm opacity-80">Deadline: {goal.deadline}</p>
            <p
              className={`mt-2 text-sm font-bold ${
                goal.completed ? "text-green-500" : "text-yellow-500"
              }`}
            >
              {goal.completed ? "✅ Done" : "⏳ In Progress"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
