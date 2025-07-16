// app/actions/expenses.ts
"use server";

import { neon } from "@neondatabase/serverless";

export async function submitExpense(formData: FormData) {
  const sql = neon(process.env.DATABASE_URL!);
  const amount = parseFloat(formData.get("amount") as string);

  if (isNaN(amount) || amount <= 0) {
    throw new Error("Invalid amount");
  }
  const flexibleSpending =
    await sql`SELECT amount FROM remaining_spending LIMIT 1`;
  const remainingAmount = flexibleSpending[0]?.amount || 0;

  await sql`UPDATE remaining_spending SET amount = ${
    remainingAmount - amount
  } WHERE id = 1`;
}

export async function resetBudget(formData: FormData) {
  const sql = neon(process.env.DATABASE_URL!);
  const resetAmount = parseFloat(formData.get("amount") as string);
  await sql`UPDATE remaining_spending SET amount = ${resetAmount} WHERE id = 1`;
}
