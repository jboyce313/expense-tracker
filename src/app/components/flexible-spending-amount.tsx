import { useState } from "react";

export default function RemainingFlexibleSpending() {
  const [flexibleSpending, setFlexibleSpending] = useState(1000);

  return (
    <div className="flex flex-col items-center mb-4 bg-white p-4 rounded shadow">
      <p>Flexible spending remaining:</p>
      <p className="text-3xl font-bold text-green-500">{flexibleSpending}</p>
    </div>
  );
}
