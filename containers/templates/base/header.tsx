import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cn } from '@/utils/cn';
import {
  CloseSquare,
  HamburgerMenu,
  SearchNormal1,
} from 'iconsax-reactjs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu } from './menu';

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
      <Menu />
      <div className="flex items-center gap-3">
        <Image
          className="rounded-full"
          src={'/images/avatar.jpg'}
          width={45}
          height={45}
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
    <div className="lg:hidden">
      <MobileHumbergerMenu />
      <div className="container flex w-full flex-col gap-3">
        <div className="flex w-full items-center justify-between">
          <button onClick={() => toggleUrlStateHumbergerMenu.show()}>
            <HamburgerMenu size={25} color="#555" />
          </button>
          <p className="text-lg font-semibold lg:text-xl">{title}</p>
          <Image
            className="rounded-full"
            src={'/images/avatar.jpg'}
            width={45}
            height={45}
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
    </div>
  );
};

export const MobileHumbergerMenu = () => {
  const toggleUrlState = useToggleUrlState('humberger-menu');

  return (
    <div>
      <div
        className={cn(
          'invisible fixed top-0 right-0 bottom-0 left-0 z-40 bg-black/20 opacity-0 backdrop-blur-sm transition-all',
          {
            'visible opacity-100': toggleUrlState.isShow,
          },
        )}
        onClick={() => toggleUrlState.hide()}
      />
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 left-0 z-50 flex w-62 -translate-x-62 flex-col gap-4 bg-white p-4 transition-all',
          {
            'translate-x-0': toggleUrlState.isShow,
          },
        )}
      >
        <div className="flex items-center justify-between">
          <Image src={'/images/logo.png'} width={170} height={170} alt="logo" />
          <button onClick={() => toggleUrlState.hide()}>
            <CloseSquare size={30} className={'text-gray-500'} />
          </button>
        </div>
        <Menu />
      </div>
    </div>
  );
};
