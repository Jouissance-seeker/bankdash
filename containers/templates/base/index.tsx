'use client';

import { ReactNode } from 'react';
import { Header } from './header';

interface IProps {
  children: ReactNode;
}

export default function TemplateBase(props: IProps) {
  return (
    <div className="flex">
      <div className="w-full flex flex-col h-dvh">
        <Header />
        <main className="flex flex-1 flex-col container gap-4 py-6">
          {props.children}
        </main>
      </div>
    </div>
  );
}
