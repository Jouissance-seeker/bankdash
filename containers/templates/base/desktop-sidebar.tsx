import Image from 'next/image';
import Link from 'next/link';
import { Menu } from './menu';

export const DesktopSidebar = () => {


  return (
    <div className="hidden flex-col gap-4 border-r border-gray-200 bg-white p-5 lg:flex">
      <Link href={'/'}>
        <Image
          src={'/images/logo.png'}
          width={200}
          height={200}
          alt="logo"
        />
      </Link>
      <Menu />
    </div>
  );
};
