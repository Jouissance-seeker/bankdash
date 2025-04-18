'use client';

import NextTopLoader from 'nextjs-toploader';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';
import { Suspense } from 'react';

interface IProps {
  children: ReactNode;
}

export default function Providers(props: IProps) {
  return (
    <>
      <NextTopLoader color="#155DFC" height={4} showSpinner={false} />
      <NuqsAdapter>
        <Suspense>{props.children}</Suspense>
      </NuqsAdapter>
    </>
  );
}
