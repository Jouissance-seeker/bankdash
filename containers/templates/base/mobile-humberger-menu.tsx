import { useToggleUrlState } from '@/hooks/toggle-url-state';
import { cn } from '@/utils/cn';
import { CloseSquare} from 'iconsax-reactjs';
import Image from 'next/image';
import { Menu } from './menu';

export const MobileHumbergerMenu = () => {
  const toggleUrlState = useToggleUrlState('humberger-menu');

  return (
    <div>
      <div
        className={cn(
          'invisible fixed top-0 right-0 bottom-0 left-0 bg-black/20 opacity-0 backdrop-blur-sm transition-all',
          {
            'visible opacity-100': toggleUrlState.isShow,
          },
        )}
        onClick={() => toggleUrlState.hide()}
      />
      <div
        className={cn(
          'fixed top-0 flex flex-col gap-4 right-0 bottom-0 left-0 w-62 -translate-x-62 bg-white p-4 transition-all',
          {
            'translate-x-0': toggleUrlState.isShow,
          },
        )}
      >
        <div className="flex items-center justify-between">
          <Image
            src={'/images/logo.png'}
            width={130}
            height={130}
            alt="logo"
          />
          <button onClick={() => toggleUrlState.hide()}>
            <CloseSquare size={28} className={'text-gray-500'} />
          </button>
        </div>
        <Menu />
      </div>
    </div>
  );
};
