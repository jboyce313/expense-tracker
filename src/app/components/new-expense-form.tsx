import { submitExpense } from "../actions/expenses";

export default function NewExpenseForm() {
  return (
    <div className="flex flex-col mb-4 bg-white p-4 rounded shadow">
      <form action={submitExpense} className="flex flex-col">
        <input
          name="amount"
          type="tel"
          placeholder="Enter new expense"
          className="border border-gray-300 rounded p-2 mb-2 w-full"
          required
          min="0.01"
          step="0.01"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 w-full"
        >
          Add
        </button>
      </form>
    </div>
  );
}
