import { cn } from '@/utils/cn';
import { ArrowCircleDown2, ArrowCircleUp2 } from 'iconsax-reactjs';
import Link from 'next/link';

export function RecentTransactions() {
  const data = [
    {
      description: { type: 'up', text: 'Spotify Subscription' },
      transactionId: '#89234765',
      type: 'entertainment',
      card: '1234 ****',
      date: '15 Apr, 10:15 AM',
      amount: { type: 'down', text: '-$9.99' },
      receipt: 'https://example.com/receipt/1',
    },
    {
      description: { type: 'down', text: 'Amazon Purchase' },
      transactionId: '#34892756',
      type: 'shopping',
      card: '5678 ****',
      date: '14 Apr, 8:22 PM',
      amount: { type: 'down', text: '-$189.50' },
      receipt: 'https://example.com/receipt/2',
    },
    {
      description: { type: 'up', text: 'Salary Credit' },
      transactionId: '#23894761',
      type: 'income',
      card: '9012 ****',
      date: '13 Apr, 9:00 AM',
      amount: { type: 'up', text: '+$4,200.00' },
      receipt: 'https://example.com/receipt/3',
    },
    {
      description: { type: 'down', text: 'Uber Ride' },
      transactionId: '#78451230',
      type: 'travel',
      card: '1234 ****',
      date: '12 Apr, 7:45 PM',
      amount: { type: 'down', text: '-$24.60' },
      receipt: 'https://example.com/receipt/4',
    },
    {
      description: { type: 'down', text: 'Grocery Store' },
      transactionId: '#93485612',
      type: 'shopping',
      card: '5678 ****',
      date: '11 Apr, 6:10 PM',
      amount: { type: 'down', text: '-$76.20' },
      receipt: 'https://example.com/receipt/5',
    },
    {
      description: { type: 'up', text: 'Tax Refund' },
      transactionId: '#48576329',
      type: 'income',
      card: '3456 ****',
      date: '10 Apr, 1:00 PM',
      amount: { type: 'up', text: '+$560.00' },
      receipt: 'https://example.com/receipt/6',
    },
    {
      description: { type: 'down', text: 'Gym Membership' },
      transactionId: '#67483920',
      type: 'fitness',
      card: '9012 ****',
      date: '09 Apr, 8:00 AM',
      amount: { type: 'down', text: '-$49.99' },
      receipt: 'https://example.com/receipt/7',
    },
    {
      description: { type: 'down', text: 'Netflix' },
      transactionId: '#19837465',
      type: 'entertainment',
      card: '1234 ****',
      date: '08 Apr, 11:30 PM',
      amount: { type: 'down', text: '-$15.49' },
      receipt: 'https://example.com/receipt/8',
    },
    {
      description: { type: 'up', text: 'Freelance Payment' },
      transactionId: '#38475692',
      type: 'income',
      card: '5678 ****',
      date: '07 Apr, 3:45 PM',
      amount: { type: 'up', text: '+$820.00' },
      receipt: 'https://example.com/receipt/9',
    },
    {
      description: { type: 'down', text: 'Flight Ticket' },
      transactionId: '#28374659',
      type: 'travel',
      card: '3456 ****',
      date: '06 Apr, 12:00 PM',
      amount: { type: 'down', text: '-$320.00' },
      receipt: 'https://example.com/receipt/10',
    },
  ];

  return (
    <div className="col-span-full flex flex-col gap-3 lg:col-span-2">
      <p className="text-lg font-semibold lg:text-xl">Recent Transactions</p>
      <div className="rounded-[20px] border border-gray-200 bg-white px-4 py-2">
        <div className="relative flex h-full w-full flex-col bg-clip-border text-gray-700">
          <div className="overflow-x-auto">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {[
                    'Description',
                    'Transaction ID',
                    'Type',
                    'Card',
                    'Date',
                    'Amount',
                    'Receipt',
                  ].map((header, idx) => (
                    <th
                      key={idx}
                      className="bg-blue-gray-50 border-b border-gray-100 p-4"
                    >
                      <p className="text-blue-gray-900 block font-sans text-sm leading-none font-normal antialiased opacity-70">
                        {header}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  const isLast = index === data.length - 1;
                  const rowClass = cn('border-b border-gray-100 p-4', {
                    'border-none': isLast,
                  });
                  const amountColor =
                    item.amount.type === 'down'
                      ? 'text-red-500'
                      : 'text-green-500';
                  const descriptionIcon = (type: 'up' | 'down') => {
                    if (type === 'up') {
                      return <ArrowCircleUp2 size={25} color="#666" />;
                    }
                    return <ArrowCircleDown2 size={25} color="#666" />;
                  };

                  return (
                    <tr key={index}>
                      <td className={rowClass}>
                        <span className="flex items-center gap-2">
                          <span>
                            {' '}
                            {descriptionIcon(
                              item.description.type as 'down' | 'up',
                            )}
                          </span>
                          <span>{item.description.text}</span>
                        </span>
                      </td>
                      <td className={rowClass}>{item.transactionId}</td>
                      <td className={rowClass}>{item.type}</td>
                      <td className={rowClass}>{item.card}</td>
                      <td className={rowClass}>{item.date}</td>
                      <td className={`${rowClass} ${amountColor}`}>
                        {item.amount.text}
                      </td>
                      <td className={rowClass}>
                        {item.receipt ? (
                          <Link
                            href={item.receipt}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full border px-2.5 py-1.5 text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
                          >
                            Download
                          </Link>
                        ) : (
                          '—'
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
