import { cn } from '@/utils/cn';
import { Home2, MoneyChange, User } from 'iconsax-reactjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const DesktopSidebar = () => {
  const title = usePathname().split('/')[1];

  const routes = [
    {
      icon: Home2,
      name: 'Dashboard',
    },
    {
      icon: MoneyChange,
      name: 'Transactions',
    },
    {
      icon: User,
      name: 'Accounts',
    },
  ];

  return (
    <div className="hidden flex-col gap-4 border-r border-gray-200 bg-white p-5 lg:flex">
      <Link href={'/'}>
        <Image
          src={'/images/templates/base/logo.png'}
          width={200}
          height={200}
          alt="logo"
        />
      </Link>
      <div>
        {routes.map((item) => {
          return (
            <Link
              href={`/${item.name.toLowerCase()}`}
              key={item.name}
              className={cn("flex items-center gap-2 rounded-lg p-2 pl-0 relative after:absolute after:-left-5 after:top-0 after:h-full after:w-1.5 after:rounded-r-lg after:bg-blue-600 after:opacity-0", {
                'after:opacity-100': title === item.name.toLowerCase(),
              })}
            >
              <item.icon
                size={28}
                variant="Bold"
                className={cn('text-gray-400', {
                  'text-blue-600': title === item.name.toLowerCase(),
                })}
              />
              <p
                className={cn('text-smp font-medium text-gray-600', {
                  'text-blue-600': title === item.name.toLowerCase(),
                })}
              >
                {item.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
