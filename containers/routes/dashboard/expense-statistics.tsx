'use client';

import type { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { ThreeDots } from 'react-loader-spinner';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => (
    <div className='flex items-center justify-center py-4'>
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

export function ExpenseStatistics() {
  const series = [42, 47, 52, 58, 65];
  const options: ApexOptions = {
    chart: {
      width: 380,
      type: 'polarArea',
    },
    labels: [
      'Entertainment',
      'Bill Expense',
      'Investment',
      'Others',
      'Savings',
    ],
    colors: ['#6366F1', '#F59E0B', '#10B981', '#EF4444', '#8B5CF6'], // 🎨 Custom colors
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
  };

  return (
    <div className="col-span-full flex h-full flex-col gap-3 overflow-hidden lg:col-span-2">
      <p className="text-lg font-semibold lg:text-xl">Expense Statistics</p>
      <div className="rounded-[20px] border border-gray-200 bg-white p-4">
        <ReactApexChart
          options={options}
          series={series}
          type="polarArea"
          width="100%"
          height={350}
        />
      </div>
    </div>
  );
}
