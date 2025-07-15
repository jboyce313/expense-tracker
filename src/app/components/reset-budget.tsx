export default function ResetBudget() {
  const handleReset = () => {
    // Logic to reset the budget goes here
    console.log("Budget has been reset");
  };

  return (
    <div className="flex flex-col mb-4">
      <button
        onClick={handleReset}
        className="bg-red-500 text-white rounded p-2 w-full"
      >
        Reset flexible spending
      </button>
    </div>
  );
}
