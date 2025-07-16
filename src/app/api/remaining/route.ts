// app/api/remaining/route.ts
import { neon } from "@neondatabase/serverless";

export async function GET() {
  const sql = neon(process.env.DATABASE_URL!);
  const result = await sql`SELECT amount FROM remaining_spending LIMIT 1`;
  return Response.json({ amount: result[0]?.amount || 0 });
}
