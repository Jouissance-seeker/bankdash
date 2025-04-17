import { Apple, Game, User } from 'iconsax-reactjs';

export function InvoicesSent() {
  const data = [
    {
      text: 'Apple Store',
      amount: '$450',
      time: '5h ago',
      icon: Apple,
      color: '#FFBB38',
    },
    {
      text: 'Michael',
      amount: '$160',
      time: '2 days ago',
      icon: User,
      color: '#396AFF',
    },
    {
      text: 'Playstation',
      amount: '$740',
      time: '5 days ago',
      icon: Game,
      color: '#16DBCC',
    },
  ];

  return (
    <div className="col-span-full flex flex-col gap-3 overflow-hidden lg:col-span-2">
      <p className="text-lg font-semibold lg:text-xl">Invoices Sent</p>
      <div className="rounded-[20px] border border-gray-200 bg-white px-4 py-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <div
                style={{
                  backgroundColor: `${item.color}2A`,
                }}
                className="rounded-2xl p-3"
              >
                <item.icon size="25" color={item.color} />
              </div>
              <div className="flex flex-col">
                <p className="text-smp font-semibold">{item.text}</p>
                <p className="text-sm text-gray-400">{item.time}</p>
              </div>
            </div>
            <p
              className={'text-gray-400'}
            >
              {item.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
