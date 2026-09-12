
const YourStack = () => {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 flex flex-col gap-3">
      <h3 className="text-base font-bold">Your Stack</h3>
      <p className="text-sm text-gray-400">No technologies selected yet</p>
      <button className="btn btn-outline btn-error w-full">Remove All</button>
    </div>
  );
};

export default YourStack;
