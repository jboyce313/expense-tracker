import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { amount } = await request.json();
  const sql = neon(process.env.DATABASE_URL!);

  try {
    await sql`UPDATE remaining_spending SET amount = ${amount} WHERE id = 1`;
    const result = await sql`SELECT amount FROM remaining_spending LIMIT 1`;
    return NextResponse.json({ amount: result[0]?.amount || 0 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update amount" },
      { status: 500 }
    );
  }
}
