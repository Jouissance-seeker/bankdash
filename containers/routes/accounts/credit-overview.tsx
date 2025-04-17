'use client';

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
        color="#1A16F3"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  ),
});

export function CreditOverview() {
  const series = [
    {
      name: 'Debit',
      data: [44, 55, 57, 56, 61, 58, 63],
    },
    {
      name: 'Credit',
      data: [76, 85, 101, 98, 87, 105, 91],
    },
  ];
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#FCAA0B', '#1A16F3'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        borderRadius: 5,
        borderRadiusApplication: 'end',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$ ${val} thousands`,
      },
    },
    legend: {
      show: true,
      position: 'top',
    },
  };

  return (
    <div className="flex flex-col gap-3 overflow-hidden">
      <p className="text-lg font-semibold lg:text-xl">Weekly Activity</p>
      <div className="rounded-[20px] border border-gray-200 bg-white p-4 pb-0">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
}
