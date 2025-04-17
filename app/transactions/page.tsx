import { MyCards } from "@/containers/routes/global/my-cards";
import { MyExpense } from "@/containers/routes/transactions/my-expense";
import { RecentTransactions } from "@/containers/routes/transactions/recent-transactions";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <MyCards />
        <MyExpense />
      </div>
      <RecentTransactions />
    </>
  );
}
