import { type Technology } from "./TechnologyCard";

const YourStack = ({
  stack,
  onRemove,
}: {
  stack: Technology[];
  onRemove: (name: string) => void;
}) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
      <h3 className="text-base font-bold">Your Stack</h3>

      <p className="text-sm text-gray-400">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="text-sm text-gray-400">No technologies selected yet</p>
      ) : (
        stack.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <span>{item.name}</span>
            <button onClick={() => onRemove(item.name)}>✕</button>
          </div>
        ))
      )}

      <button className="btn btn-outline btn-error w-full">Remove All</button>
    </div>
  );
};

export default YourStack;
