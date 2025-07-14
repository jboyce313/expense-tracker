import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function NewExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const [amount, setAmount] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  return (
    <div className="flex flex-col items-center mb-4 bg-white p-4 rounded shadow">
      <h2>Enter new expense:</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={handleChange}
          className="border border-gray-300 rounded"
        />
      </form>
    </div>
  );
}
