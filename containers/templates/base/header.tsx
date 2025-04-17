import {
  HamburgerMenu,
  NotificationBing,
  SearchNormal1,
  Setting2,
} from 'iconsax-reactjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  return (
    <div>
      <Desktop />
      <Mobile />
    </div>
  );
}

const Desktop = () => {
  return (
    <div className="hidden w-full items-center justify-between bg-white p-4 lg:flex">
      <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 p-2 transition-all focus-within:border-gray-300">
        <SearchNormal1 size={23} className="text-gray-500" />
        <input
          placeholder="Search for something ..."
          className="placeholder:text-gray-500"
        />
      </div>
      <div className="flex items-center gap-3">
        <Link
          href={'/setting'}
          className="rounded-full border border-gray-200 bg-gray-100 p-2 transition-all hover:border-gray-300"
        >
          <Setting2 size={20} className="text-gray-500" />
        </Link>
        <div className="rounded-full border border-gray-200 bg-gray-100 p-2 transition-all hover:border-gray-300">
          <NotificationBing size={20} className="text-red-400" />
        </div>
        <Image
          className="rounded-full"
          src={'/images/templates/base/avatar.jpg'}
          width={40}
          height={40}
          alt="avatar"
        />
      </div>
    </div>
  );
};

const Mobile = () => {
  const title =
    usePathname()[1].charAt(0).toUpperCase() + usePathname().slice(2);
  return (
    <div className="flex w-full flex-col gap-3 bg-white p-4 lg:hidden">
      <div className="flex w-full justify-between items-center">
        <button>
          <HamburgerMenu size={25} color="#555" />
        </button>
        <p className="text-lg font-semibold">{title}</p>
        <div className="flex gap-3">
          <Link
            href={'/setting'}
            className="rounded-full border border-gray-200 bg-gray-100 p-2 transition-all hover:border-gray-300"
          >
            <Setting2 size={20} className="text-gray-500" />
          </Link>
          <div className="rounded-full bg-gray-100 p-2">
            <NotificationBing size={20} className="text-red-400" />
          </div>
          <Image
            className="rounded-full"
            src={'/images/templates/base/avatar.jpg'}
            width={35}
            height={35}
            alt="avatar"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 p-2.5 transition-all focus-within:border-gray-300">
        <SearchNormal1 size={23} className="text-gray-500" />
        <input
          placeholder="Search for something ..."
          className="placeholder:text-gray-500"
        />
      </div>
    </div>
  );
};
