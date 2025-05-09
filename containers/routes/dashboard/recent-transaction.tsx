import { cn } from '@/utils/cn';
import { Cards, Money, Paypal } from 'iconsax-reactjs';

export function RecentTransaction() {
  const data = [
    {
      text: 'Deposit from my',
      amount: '-$850',
      date: '28 Jan 2023',
      direction: 'down',
      icon: Cards,
      color: '#FFBB38',
    },
    {
      text: 'Paypal',
      amount: '+$240',
      date: '13 Jan 2024',
      direction: 'up',
      icon: Paypal,
      color: '#396AFF',
    },
    {
      text: 'Jemi Wilson',
      amount: '-$445',
      date: '28 Jan 2023',
      direction: 'down',
      icon: Money,
      color: '#16DBCC',
    },
  ];

  return (
    <div className="col-span-full flex flex-col gap-3 overflow-hidden lg:col-span-2">
      <p className="text-lg font-semibold lg:text-xl">Recent Transaction</p>
      <div className="rounded-[20px] border border-gray-200 bg-white px-4 py-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-1.5">
            <div className="flex items-center gap-3">
              <div
                style={{
                  backgroundColor: `${item.color}2A`,
                }}
                className="rounded-full p-2.5"
              >
                <item.icon size="25" color={item.color} />
              </div>
              <div className="flex flex-col">
                <p className="text-smp font-semibold">{item.text}</p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </div>
            <p
              className={cn(
                item.direction === 'down' ? 'text-red-500' : 'text-green-500',
              )}
            >
              {item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
