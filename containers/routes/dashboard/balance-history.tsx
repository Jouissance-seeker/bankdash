'use client';

import React from 'react';
import type { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { ThreeDots } from 'react-loader-spinner';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-4">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#155DFC"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  ),
});

export function BalanceHistory() {
  const series = [
    {
      name: 'Income',
      data: [3100, 4000, 2800, 5100, 4200, 10900, 10000],
    },
    {
      name: 'Expenses',
      data: [1100, 3200, 4500, 3200, 3400, 5200, 4100],
    },
  ];
  const options: ApexOptions = {
    chart: {
      width: 380,
      type: 'polarArea',
      toolbar: {
        show: true,
        tools: {
          download: false,
          zoom: false,
          pan: false,
        },
      },
      zoom: {
        enabled: false,
      },
    },
    labels: [
      'Entertainment',
      'Bill Expense',
      'Investment',
      'Others',
      'Savings',
    ],
    colors: ['#6366F1', '#10B981', '#6366F1', '#10B981', '#6366F1'],
    fill: {
      opacity: 1,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },
    yaxis: {
      show: false,
    },
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      monochrome: {
        enabled: false,
      },
    },
    tooltip: {
      y: {
        formatter: (value: number) => `$${value.toLocaleString()}`,
      },
    },
  };

  return (
    <div className="col-span-full flex h-full flex-col gap-3 overflow-hidden lg:col-span-2">
      <p className="text-lg font-semibold lg:text-xl">Balance History</p>
      <div className="rounded-[20px] border border-gray-200 bg-white p-4">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
}
