import { CreditOverview } from "@/containers/routes/accounts/credit-overview";
import { InvoicesSent } from "@/containers/routes/accounts/invoices-sent";
import { Overview } from "@/containers/routes/accounts/overview";

export default function Page() {
  return (
    <>
      <Overview />
      <div className="grid grid-cols-5 gap-4">
        <p className='col-span-3'>last transaction</p>
        <InvoicesSent />
      </div>
      <CreditOverview />
    </>
  );
}
