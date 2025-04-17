import { MonthlyRevenue } from '@/containers/routes/investments/monthly-revenue';
import { Overview } from '@/containers/routes/investments/overview';
import { YearlyTotalInvestment } from '@/containers/routes/investments/yearly-total-investment';

export default function Page() {
  return (
    <>
      <Overview />
      <div className="grid grid-cols-6 gap-4">
        <YearlyTotalInvestment />
        <MonthlyRevenue />
      </div>
    </>
  );
}
