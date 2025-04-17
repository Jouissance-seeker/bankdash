import { cn } from '@/utils/cn';
import {
  Card,
  Diamonds,
  Home2,
  Judge,
  LampCharge,
  MoneyChange,
  Moneys,
  Setting2,
  User,
} from 'iconsax-reactjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Menu = () => {
  const pathname = usePathname();
  const routes = [
    {
      icon: Home2,
      name: 'Dashboard',
      pathname: '/dashboard',
    },
    {
      icon: MoneyChange,
      name: 'Transactions',
      pathname: '/transactions',
    },
    {
      icon: User,
      name: 'Accounts',
      pathname: '/accounts',
    },
    {
      icon: Moneys,
      name: 'Investments',
      pathname: 'investments',
    },
    {
      icon: Card,
      name: 'Credit Cards',
      pathname: 'credit-cards',
    },
    {
      icon: Diamonds,
      name: 'Loans',
      pathname: '/loans',
    },
    {
      icon: Judge,
      name: 'Services',
      pathname: '/services',
    },
    {
      icon: LampCharge,
      name: 'My Privileges',
      pathname: '/my-privileges',
    },
    {
      icon: Setting2,
      name: 'Setting',
      pathname: '/setting',
    },
  ];

  return (
    <div>
      {routes.map((item) => {
        return (
          <Link
            href={item.pathname}
            key={item.name}
            className={cn(
              'relative flex items-center gap-2 rounded-lg p-2 pl-0 after:absolute after:top-0 after:-left-4 after:h-full after:w-1.5 after:rounded-r-lg after:bg-blue-600 after:opacity-0 lg:after:-left-5',
              {
                'after:opacity-100': pathname === item.pathname,
              },
            )}
          >
            <item.icon
              size={28}
              variant="Bold"
              className={cn('text-gray-400', {
                'text-blue-600': pathname === item.pathname,
              })}
            />
            <p
              className={cn('text-smp font-medium', {
                'text-blue-600': pathname === item.pathname,
              })}
            >
              {item.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
