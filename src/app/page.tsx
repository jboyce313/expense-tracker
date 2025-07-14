"use client";
import RemainingFlexibleSpending from "./components/flexible-spending-amount";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold my-4">Expense Tracker</h1>
      <RemainingFlexibleSpending />
    </div>
  );
}
