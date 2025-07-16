import { neon } from "@neondatabase/serverless";

export default async function RemainingFlexibleSpending() {
  const sql = neon(process.env.DATABASE_URL!);
  const result = await sql`SELECT amount FROM remaining_spending LIMIT 1`;
  const amount = result[0]?.amount || 0;

  return (
    <div className="flex flex-col items-center mb-4 bg-white p-4 rounded shadow">
      <p>Flexible spending remaining:</p>
      <p className="text-3xl font-bold text-green-500">${amount}</p>
    </div>
  );
}
