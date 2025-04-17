import { cn } from '@/utils/cn';
import { Judge, Spotify, User } from 'iconsax-reactjs';

export function LastTransaction() {
  const data = [
    {
      text: 'Spotify',
      type: 'Shopping',
      card: '1234 ****',
      amount: '-$150',
      date: '28 Jan 2023',
      direction: 'down',
      icon: Spotify,
      color: '#16DBCC',
      status: 'Completed',
    },
    {
      text: 'Deposit',
      type: 'Service',
      card: '1234 ****',
      amount: '-$340',
      date: '13 Jan 2024',
      direction: 'down',
      icon: Judge,
      color: '#396AFF',
      status: 'Pending',
    },
    {
      text: 'Jemi Wilson',
      type: 'Transfer',
      card: '1234 ****',
      amount: '+$445',
      date: '28 Jan 2023',
      direction: 'up',
      icon: User,
      color: '#FF82AC',
      status: 'Completed',
    },
  ];

  return (
    <div className="col-span-full flex flex-col gap-3 lg:col-span-3">
      <p className="text-lg font-semibold lg:text-xl">Last Transaction</p>

      <div className="rounded-[20px] border border-gray-200 bg-white px-4 py-2">
        <div className="w-full overflow-x-auto">
          <div className="flex min-w-[640px] flex-col divide-y divide-gray-100">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 py-2 text-sm text-gray-600"
              >
                {' '}
                <div className="flex min-w-[160px] items-center gap-3">
                  <div
                    style={{ backgroundColor: `${item.color}2A` }}
                    className="rounded-full p-3"
                  >
                    <item.icon size="25" color={item.color} />
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium text-smp whitespace-nowrap text-gray-800">
                      {item.text}
                    </p>
                    <p className="text-xs text-gray-400">{item.date}</p>
                  </div>
                </div>
                <div className="w-[80px] truncate text-gray-500">
                  {item.card}
                </div>
                <div className="w-[80px] truncate text-gray-500">
                  {item.type}
                </div>
                <div className="w-[80px] truncate text-gray-500">
                  {item.status}
                </div>
                <div
                  className={cn(
                    'w-[80px] text-end font-medium',
                    item.direction === 'down'
                      ? 'text-red-500'
                      : 'text-green-500',
                  )}
                >
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
