"use client"; // Add this since we're using useState

import { useState } from "react";
import { resetBudget } from "../actions/expenses";

export default function NewExpenseForm() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col mb-4 bg-white p-4 rounded shadow">
      <button
        type="button"
        onClick={() => setShowForm(!showForm)}
        className={`${
          showForm ? "bg-red-500" : "bg-green-500"
        } text-white rounded p-2 w-full mb-2`}
      >
        {showForm ? "Cancel" : "Reset flexible spending"}
      </button>

      {showForm && (
        <form action={resetBudget} className="flex flex-col">
          <input
            name="amount"
            type="tel"
            placeholder="Enter reset amount"
            className="border border-gray-300 rounded p-2 mb-2 w-full"
            required
            min="0.01"
            step="0.01"
          />
          <button
            type="submit"
            className="bg-green-500 text-white rounded p-2 w-full"
            onClick={() => setShowForm(false)}
          >
            Reset
          </button>
        </form>
      )}
    </div>
  );
}
