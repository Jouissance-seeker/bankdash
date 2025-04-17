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
        color="#155DFC"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  ),
});

export function MyExpense() {
  const series = [
    {
      name: 'Expense',
      data: [38, 42, 47, 50, 55, 59, 62, 65, 70],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 190,
      toolbar: {
        show: false,
      },
    },
    colors: ['#16DBCC'],
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
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
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
    <div className="col-span-full flex flex-col gap-3 overflow-hidden lg:col-span-2">
      <p className="text-lg font-semibold lg:text-xl">My Expense</p>
      <div className="max-h-[190px] rounded-[20px] border border-gray-200 bg-white p-4 pb-0">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={170}
        />
      </div>
    </div>
  );
}
