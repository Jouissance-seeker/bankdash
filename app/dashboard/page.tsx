import { MyCards } from "@/containers/routes/global/my-cards";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <MyCards />
        <p className="col-span-full rounded-2xl border border-gray-200 bg-white p-3 lg:col-span-2">
          recent transaction
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <p className="col-span-full rounded-2xl border border-gray-200 bg-white p-3 lg:col-span-3">
          weekly activity
        </p>
        <p className="col-span-full rounded-2xl border border-gray-200 bg-white p-3 lg:col-span-2">
          expense statistics
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <p className="col-span-full rounded-2xl border border-gray-200 bg-white p-3 lg:col-span-2">
          quick transfer
        </p>
        <p className="col-span-full rounded-2xl border border-gray-200 bg-white p-3 lg:col-span-3">
          banalce history
        </p>
      </div>
    </>
  );
}
