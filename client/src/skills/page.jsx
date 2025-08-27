"use client";
import React from "react";
import SkillTracker from "../components/SkillTracker";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-white  dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Skill Tracker / Roadmap</h1>
      <SkillTracker />
    </div>
  );
}
