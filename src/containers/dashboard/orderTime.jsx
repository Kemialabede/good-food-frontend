import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import styles from './dashboard.module.scss';
import classNames from 'classnames';

const OrderTime = () => {
  const [currentTooltip, setCurrentTooltip] = useState(null);

  const tooltipData = [
    { label: 'Evening', value: '1pm - 4pm', details: '1.890 orders' },
    {
      label: 'Afternoon',
      value: '1pm - 4pm',
      details: '1.890 orders',
    },
    { label: 'Morning', value: '1pm - 4pm', details: '1.890 orders' },
  ];

  const CustomTooltip = ({ data }) => {
    if (!data) return null;

    return (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          background: '#37375C',
          color: 'white',
          transform: 'translate(-50%, -50%)',
          padding: '16px',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          pointerEvents: 'none',
          width: '140px',
          fontSize: '12px',
        }}
      >
        <h3>{data.label}</h3>
        <p style={{ opacity: '50%', marginTop: '10px' }}> {data.value}</p>
        <p style={{ fontSize: '16px', marginTop: '10px' }}>{data.details}</p>
      </div>
    );
  };
  const options = {
    chart: {
      type: 'donut',
      events: {
        mouseMove: function (config) {
          const dataPointIndex = config.dataPointIndex;
          if (dataPointIndex !== -1 && tooltipData[dataPointIndex]) {
            setCurrentTooltip(tooltipData[dataPointIndex]);
          } else {
            setCurrentTooltip(null);
          }
        },
        mouseLeave: function () {
          setCurrentTooltip(null);
        },
      },
    },
    labels: ['Evening', 'Afternoon', 'Morning'],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
      },
    },
    colors: ['#8593ED', '#5A6ACF', '#C7CEFF'],
    stroke: {
      width: 0,
    },
    legend: {
      position: 'bottom',
      styles: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      formatter: function (seriesName, opts) {
        return `<div>
        <p>${seriesName}</p> <p>${opts.w.globals.series[opts.seriesIndex]}%</p>
        </div>`;
      },
    },
    tooltip: {
      enabled: false,
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        filter: {
          type: 'shadow',
          value: 0.25,
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['#8593ED', '#5A6ACF', '#C7CEFF'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
  };

  const series = [40, 32, 28];

  return (
    <div style={{ position: 'relative' }}>
      <div
        className={classNames(
          styles.chartContainer__textContainer,
          styles.orderTime
        )}
      >
        <div>
          <p className={styles.chartContainer__textContainer__heading}>
            Order Time
          </p>
          <p
            className={styles.chartContainer__chartHeader}
            style={{ marginTop: 'unset' }}
          >
            From 1-6 Dec, 2020
          </p>
        </div>
        <button className={styles.reportButton}>View report</button>
      </div>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="100%"
        height="100%"
      />
      <CustomTooltip data={currentTooltip} />
    </div>
  );
};

export default OrderTime;
