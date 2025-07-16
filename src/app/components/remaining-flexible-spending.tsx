"use client";

import { useEffect, useState } from "react";

export default function RemainingFlexibleSpending() {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    async function fetchAmount() {
      const res = await fetch("/api/remaining");
      const data = await res.json();
      setAmount(data.amount);
    }

    fetchAmount();
    const interval = setInterval(fetchAmount, 5000); // Optional: poll every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mb-4 bg-white p-4 rounded shadow">
      <p>Flexible spending remaining:</p>
      <p className="text-3xl font-bold text-green-500">${amount}</p>
    </div>
  );
}
