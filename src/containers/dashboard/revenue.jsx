import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import styles from './dashboard.module.scss';
import { IoIosArrowRoundUp } from 'react-icons/io';

const Revenue = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '12px',
        opacity: '50%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
      ],
      labels: {
        show: true,
        style: {
          colors: '#737B8B',
          fontSize: '11px',
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      title: {
        text: '',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    colors: ['#5A6ACF', '#E6E8EC'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'left',
      offsetY: 10,
      offsetX: -5,
      markers: {
        radius: 12,
        border: {
          width: 0,
        },
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: true,
          opacity: 0.5,
          dashArray: [5, 5],
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      borderColor: '#e0e0e0',
      strokeDashArray: 5,
    },
  };

  const series = [
    {
      name: 'Last 6 days',
      data: [1, 2, 5, 6, 7, 3, 5, 6, 6, 7, 3, 4],
    },
    {
      name: 'Last week',
      data: [1, 3, 5, 7, 8, 3, 4, 5, 6, 3, 5, 6],
    },
  ];

  return (
    <div>
      <div className={styles.chartContainer__textContainer}>
        <div>
          <p className={styles.chartContainer__textContainer__heading}>
            Revenue
          </p>
          <p className={styles.chartContainer__textContainer__idr}>
            IDR 7.852.000
          </p>
          <p className={styles.chartContainer__textContainer__percentage}>
            <span>
              <IoIosArrowRoundUp />
              <span>2.1%</span>
            </span>{' '}
            vs last week
          </p>
        </div>
        <button className={styles.reportButton}>View Report</button>
      </div>
      <p className={styles.chartContainer__chartHeader}>
        Sales from 1-12 Dec, 2020{' '}
      </p>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default Revenue;
