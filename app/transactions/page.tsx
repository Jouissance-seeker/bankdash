import { MyCards } from "@/containers/routes/global/my-cards";
import { MyExpense } from "@/containers/routes/transactions/my-expense";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <MyCards />
        <MyExpense />
      </div>
    </>
  );
}
