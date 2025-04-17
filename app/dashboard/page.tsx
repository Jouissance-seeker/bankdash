import { BalanceHistory } from '@/containers/routes/dashboard/balance-history';
import { ExpenseStatistics } from '@/containers/routes/dashboard/expense-statistics';
import { RecentTransaction } from '@/containers/routes/dashboard/recent-transaction';
import { WeeklyActivity } from '@/containers/routes/dashboard/weekly-activity';
import { MyCards } from '@/containers/routes/global/my-cards';

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <MyCards />
        <RecentTransaction />
      </div>
      <div className="grid grid-cols-5 gap-4">
        <WeeklyActivity />
        <ExpenseStatistics />
      </div>
    <BalanceHistory />
    </>
  );
}
