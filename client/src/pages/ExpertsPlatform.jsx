"use client";

import { Card, CardContent } from "../components/ui/Card";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  Code,
  Paintbrush,
  BookOpen,
  DollarSign,
  Stethoscope,
  Users,
  Gavel,
  Rocket,
  Heart,
  GraduationCap,
  Cloud,
  Database,
  Cpu,
  PenTool,
  Briefcase,
  Globe,
  Settings,
  Sparkles,
  Mic,
  Shield,
    Dumbbell,


} from "lucide-react";

const categories = [
  

  // 🔥 Extra Tech Categories
  { id: "cloud", name: "Cloud Computing", icon: Cloud },
  { id: "blockchain", name: "Blockchain", icon: Cpu },
  { id: "devops", name: "DevOps", icon: Settings },
  { id: "ml", name: "Machine Learning", icon: Brain },

  // 🔥 Personal Growth Categories
  { id: "public-speaking", name: "Public Speaking", icon: Mic },
  { id: "fitness", name: "Fitness & Health", icon: Dumbbell },
  { id: "relationships", name: "Relationships", icon: Heart },
  { id: "self-growth", name: "Self Growth", icon: Sparkles },

  { id: "career", name: "Career", icon: Briefcase },
  { id: "consulting", name: "Consulting", icon: Users },
  { id: "content", name: "Content", icon: PenTool },
  { id: "cybersecurity", name: "Cybersecurity", icon: Shield },
  { id: "data-ai", name: "Data & AI", icon: Brain },
  { id: "design", name: "Design", icon: Paintbrush },
  { id: "finance", name: "Finance", icon: DollarSign },
  { id: "hr", name: "HR", icon: Users },
  { id: "law", name: "Law", icon: Gavel },
  { id: "marketing", name: "Marketing", icon: Rocket },
  { id: "mental-health", name: "Mental Health", icon: Heart },
  { id: "product", name: "Product", icon: Settings },
  { id: "software", name: "Software", icon: Code },
  { id: "study-abroad", name: "Study Abroad", icon: Globe },
  { id: "best-selling", name: "Best Selling", icon: Sparkles },
  { id: "supply-chain", name: "Supply Chain", icon: Database },
  { id: "others", name: "Others", icon: BookOpen },
];

export default function CategoriesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        🚀 Explore Categories
      </h1>

<div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          The <span className="font-bold text-3xl text-blue-600 dark:text-cyan-400"> Career Mentorship App </span>Platform for Experts
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Experts from every niche use our platform to build trust, grow revenue, and stay booked.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card
              key={category.id}
              className="cursor-pointer shadow-lg dark:bg-gray-800 bg-white border dark:border-gray-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={() => navigate(`/categories/${category.id}`)}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <Icon className="h-10 w-10 text-blue-500 mb-3" />
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {category.name}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
