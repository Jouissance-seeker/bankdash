import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { HamburgerMenu, SearchNormal1, Setting2 } from 'iconsax-reactjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  return (
    <div className="sticky top-0 z-10 border-b border-b-gray-200 bg-white py-4">
      <Desktop />
      <Mobile />
    </div>
  );
}

const Desktop = () => {
  return (
    <div className="container hidden w-full items-center justify-between lg:flex">
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
        <Image
          className="rounded-full"
          src={'/images/avatar.jpg'}
          width={38}
          height={38}
          alt="avatar"
        />
      </div>
    </div>
  );
};

const Mobile = () => {
  const toggleUrlStateHumbergerMenu = useToggleUrlState('humberger-menu');
  const title =
    String(usePathname()[1] || '')
      .charAt(0)
      .toUpperCase() + usePathname().slice(2);

  return (
    <div className="container flex w-full flex-col gap-3 lg:hidden">
      <div className="flex w-full items-center justify-between">
        <button onClick={() => toggleUrlStateHumbergerMenu.show()}>
          <HamburgerMenu size={25} color="#555" />
        </button>
        <p className="text-lg font-semibold lg:text-xl">{title}</p>
        <Image
          className="rounded-full"
          src={'/images/avatar.jpg'}
          width={35}
          height={35}
          alt="avatar"
        />
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
