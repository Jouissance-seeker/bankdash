'use client';

import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { ThreeDots } from 'react-loader-spinner';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-4">
      <ThreeDots
        visible
        height="60"
        width="60"
        color="#1A16F3"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  ),
});
const options: ApexOptions = {
  chart: {
    type: 'line',
    zoom: { enabled: false },
    toolbar: { show: false },
  },
  stroke: {
    curve: 'straight',
    width: 3,
    colors: ['#FCAA0B'],
  },
  grid: {
    borderColor: '#eee',
    row: { opacity: 0.2 },
  },
  xaxis: {
    categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
    labels: { style: { colors: '#999', fontSize: '12px' } },
  },
  yaxis: {
    labels: {
      formatter: (val) => `$${val.toLocaleString()}`,
      style: { colors: '#999', fontSize: '12px' },
    },
  },
  tooltip: {
    y: {
      formatter: (val) => `$${val.toLocaleString()}`,
    },
  },
  dataLabels: { enabled: false },
};
const series = [
  {
    name: 'Investment',
    data: [10000, 20000, 30000, 40000, 25000, 35000],
  },
];

export function YearlyTotalInvestment() {
  return (
    <div className="col-span-full flex flex-col gap-3 overflow-hidden lg:col-span-3">
      <p className="text-lg font-semibold text-gray-700 lg:text-xl">
        Yearly Investment
      </p>
      <div className="rounded-[20px] border border-gray-200 bg-white p-4 pb-2">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={300}
        />
      </div>
    </div>
  );
}
