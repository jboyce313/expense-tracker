import RemainingFlexibleSpending from "./components/remaining-flexible-spending";
import NewExpenseForm from "./components/new-expense-form";
import ResetBudget from "./components/reset-budget";

export default async function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mt-4 mb-8">Expense Tracker</h1>
      <RemainingFlexibleSpending />
      <NewExpenseForm />
      <ResetBudget />
    </div>
  );
}
