'use client';

import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Providers(props: IProps) {
  return (
    <NuqsAdapter>
      <Suspense>{props.children}</Suspense>
    </NuqsAdapter>
  );
}
