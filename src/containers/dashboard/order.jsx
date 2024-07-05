import React from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import styles from './dashboard.module.scss';
import { IoIosArrowRoundDown } from 'react-icons/io';

const Order = () => {
  const options = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#5A6ACF', '#E6E8EC'],
    stroke: {
      width: [4, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
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
      borderColor: '#e0e0e0',
      strokeDashArray: 5,
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FF1654',
        },
        labels: {
          style: {
            colors: '#FF1654',
          },
        },
        title: {
          text: 'Series A',
          style: {
            color: '#FF1654',
          },
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#247BA0',
        },
        labels: {
          style: {
            colors: '#247BA0',
          },
        },
        title: {
          text: 'Series B',
          style: {
            color: '#247BA0',
          },
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: true,
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
    xaxis: {
      labels: {
        show: true, // Hide x-axis labels
      },
    },
    yaxis: {
      labels: {
        show: false, // Hide x-axis labels
      },
    },
  };

  const series = [
    {
      name: 'Series A',
      data: [34, 28, 26, 34, 23, 20, 35, 40],
    },
    {
      name: 'Series B',
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ];

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartContainer__textContainer}>
        <div>
          <p className={styles.chartContainer__textContainer__heading}>Order</p>
          <p className={styles.chartContainer__textContainer__idr}>2.568</p>
          <p className={styles.chartContainer__textContainer__percentage}>
            <span style={{ color: '#F2383A' }}>
              <IoIosArrowRoundDown />
              2.1%
            </span>{' '}
            vs last week
          </p>
        </div>
        <button className={styles.reportButton}>View Report</button>
      </div>
      <p className={styles.chartContainer__chartHeader}>
        Sales from 1-12 Dec, 2020{' '}
      </p>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default Order;
