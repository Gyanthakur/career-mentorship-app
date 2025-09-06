


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
  { id: "cloud", name: "Cloud Computing", icon: Cloud, color: "text-blue-500" },
  { id: "blockchain", name: "Blockchain", icon: Cpu, color: "text-purple-500" },
  { id: "devops", name: "DevOps", icon: Settings, color: "text-cyan-500" },
  { id: "ml", name: "Machine Learning", icon: Brain, color: "text-green-500" },
  { id: "public-speaking", name: "Public Speaking", icon: Mic, color: "text-yellow-500" },
  { id: "fitness", name: "Fitness & Health", icon: Dumbbell, color: "text-red-500" },
  { id: "relationships", name: "Relationships", icon: Heart, color: "text-pink-500" },
  { id: "self-growth", name: "Self Growth", icon: Sparkles, color: "text-indigo-500" },
  { id: "career", name: "Career", icon: Briefcase, color: "text-gray-700" },
  { id: "consulting", name: "Consulting", icon: Users, color: "text-orange-500" },
  { id: "content", name: "Content", icon: PenTool, color: "text-blue-700" },
  { id: "cybersecurity", name: "Cybersecurity", icon: Shield, color: "text-red-600" },
  { id: "data-ai", name: "Data & AI", icon: Brain, color: "text-green-600" },
  { id: "design", name: "Design", icon: Paintbrush, color: "text-pink-600" },
  { id: "finance", name: "Finance", icon: DollarSign, color: "text-yellow-600" },
  { id: "hr", name: "HR", icon: Users, color: "text-gray-600" },
  { id: "law", name: "Law", icon: Gavel, color: "text-purple-600" },
  { id: "marketing", name: "Marketing", icon: Rocket, color: "text-cyan-600" },
  { id: "mental-health", name: "Mental Health", icon: Heart, color: "text-pink-700" },
  { id: "product", name: "Product", icon: Settings, color: "text-indigo-600" },
  { id: "software", name: "Software", icon: Code, color: "text-gray-800" },
  { id: "study-abroad", name: "Study Abroad", icon: Globe, color: "text-blue-600" },
  { id: "best-selling", name: "Best Selling", icon: Sparkles, color: "text-yellow-500" },
  { id: "supply-chain", name: "Supply Chain", icon: Database, color: "text-green-700" },
  { id: "others", name: "Others", icon: BookOpen, color: "text-gray-500" },
];

export default function CategoriesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-14 px-6 md:px-20">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900 dark:text-white">
        🚀 Explore Categories
      </h1>
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          The{" "}
          <span className="text-blue-600 dark:text-cyan-400 underline decoration-2 decoration-blue-300">
            Career Mentorship App
          </span>{" "}
          Platform for Experts
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg leading-relaxed">
          Experts from every niche use our platform to build trust, grow revenue, and stay booked.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {categories.map(({ id, name, icon: Icon, color }) => (
          <Card
            key={id}
            className="cursor-pointer shadow-lg dark:bg-gray-800 bg-white border dark:border-gray-700 rounded-xl
                       hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out"
            onClick={() => navigate(`/categories/${id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") navigate(`/categories/${id}`);
            }}
            aria-label={`Go to ${name} category`}
          >
            <CardContent className="flex flex-col items-center justify-center p-6 text-center">
              <div
                className={`p-4 rounded-full bg-gradient-to-tr from-white/90 to-white/60 shadow-md mb-4 border-2 border-transparent ${color} flex items-center justify-center`}
                style={{ boxShadow: "0 8px 15px -5px rgba(0,0,0,0.1)" }}
              >
                <Icon className={`h-12 w-12 ${color}`} />
              </div>
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
