
import { useParams } from "react-router-dom";
import { roadmap } from "../../data/roadmap";

export default function RoadmapDetails() {
  const { id } = useParams();
  const item = roadmap.find((step) => step.id === id);

  if (!item) {
    return <div className="p-6 text-center">❌ Roadmap not found</div>;
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white p-6 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <img src={item.image} alt={item.title} className="h-36 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4 text-center">{item.title}</h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">{item.description}</p>
        
        <h2 className="text-2xl font-semibold mb-3">What You’ll Learn:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          {item.details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
