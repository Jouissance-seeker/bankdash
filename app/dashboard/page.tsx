export default function Page() {
  return (
    <>
      <div className="grid-cols-5 grid gap-4">
        <p className="border border-gray-200 bg-white p-3 rounded-2xl col-span-full lg:col-span-3">my cards</p>
        <p className="border border-gray-200 bg-white p-3 rounded-2xl col-span-full lg:col-span-2">recent transaction</p>
      </div>
      <div className="grid-cols-5 grid gap-4">
        <p className="border border-gray-200 bg-white p-3 rounded-2xl col-span-full lg:col-span-3">weekly activity</p>
        <p className="border border-gray-200 bg-white p-3 rounded-2xl col-span-full lg:col-span-2">expense statistics</p>
      </div>
      <div className="grid-cols-5 grid gap-4">
        <p className="border border-gray-200 bg-white p-3 rounded-2xl col-span-full lg:col-span-2">quick transfer</p>
        <p className="border border-gray-200 bg-white p-3 rounded-2xl col-span-full lg:col-span-3">banalce history</p>
      </div>
    </>
  );
}
