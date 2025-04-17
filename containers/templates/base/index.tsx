'use client';

import { ReactNode } from 'react';
import { Header } from './header';
import { DesktopSidebar } from './desktop-sidebar';
import { MobileHumbergerMenu } from './mobile-humberger-menu';

interface IProps {
  children: ReactNode;
}

export default function TemplateBase(props: IProps) {
  return (
    <div className="flex">
      <DesktopSidebar />
      <MobileHumbergerMenu />
      <div className="w-full flex flex-col h-dvh">
        <Header />
        <main className="flex flex-1 flex-col container gap-4 p-4">
          {props.children}
        </main>
      </div>
    </div>
  );
}
