

export interface Technology {
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col gap-4">
      {/* Icon + badge row */}

      <div className="flex items-center justify-between">
        <img src={technology.icon} alt={technology.name} className="h-8 w-8" />

        <span className="badge badge-info badge-outline rounded-full text-xs px-3">
          {" "}
          {technology.badge}
        </span>
      </div>

      {/* Name */}

      <h3 className="text-lg font-bold text-gray-900">{technology.name}</h3>

      {/* Description */}

      <p className="text-sm text-gray-500">{technology.description}</p>

      {/* Meta row (Category, Difficulty, Rating) */}

      <div className="flex items-center justify-between text-sm">
        <span className="badge badge-ghost rounded-md text-xs">
          {technology.category}
        </span>
        <span className="text-gray-500">{technology.difficulty}</span>
        <span className="flex items-center gap-1 text-gray-700">
          {" "}
          ⭐ {technology.rating}
        </span>
      </div>

      {/* Button */}

      <button
        className="btn btn-neutral w-full rounded-xl "
        onClick={() => onAdd(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
