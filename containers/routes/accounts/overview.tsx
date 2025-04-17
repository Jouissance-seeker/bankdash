import { Cards, Money4, MoneyRecive, MoneySend } from 'iconsax-reactjs';

export function Overview() {
  const data = [
    {
      text: 'My Balance',
      amount: '$12,750',
      icon: Cards,
      color: '#FFBB38',
    },
    {
      text: 'Income',
      amount: '$850',
      icon: MoneyRecive,
      color: '#396AFF',
    },
    {
      text: 'Expenses',
      amount: '$620',
      icon: MoneySend,
      color: '#FF82AC',
    },
    {
      text: 'Total Saving',
      amount: '$12,340',
      icon: Money4,
      color: '#16DBCC',
    },
  ];

  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 rounded-[20px]">
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
                <p className={`text-xl font-semibold text-gray-600`}>
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
