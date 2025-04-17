import { CreditOverview } from "@/containers/routes/accounts/credit-overview";
import { InvoicesSent } from "@/containers/routes/accounts/invoices-sent";
import { LastTransaction } from "@/containers/routes/accounts/last-transactions";
import { Overview } from "@/containers/routes/accounts/overview";

export default function Page() {
  return (
    <>
      <Overview />
      <div className="grid grid-cols-5 gap-4">
        <LastTransaction />
        <InvoicesSent />
      </div>
      <CreditOverview />
    </>
  );
}
