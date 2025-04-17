import { BitcoinRefresh, Bubble, Moneys } from 'iconsax-reactjs';

export function Overview() {
  const data = [
    {
      text: 'Total Invested Amount',
      amount: '$150,000',
      icon: Moneys,
      color: '#16DBCC',
    },
    {
      text: 'Number of Investments',
      amount: '1,250',
      icon: Bubble,
      color: '#FF82AC',
    },
    {
      text: 'Rate of Return',
      amount: '+5.80%',
      icon: BitcoinRefresh,
      color: '#396AFF',
    },
  ];

  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4"
          >
            <div className="flex items-center gap-3">
              <div
                style={{
                  backgroundColor: `${item.color}2A`,
                }}
                className="rounded-full p-3"
              >
                <item.icon size="25" color={item.color} variant="Bold" />
              </div>
              <div className="flex flex-col">
                <p className="text-sm text-gray-500">{item.text}</p>
                <p className="text-xl font-semibold text-gray-600">
                  {item.amount}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
