import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const [series] = useState([44, 55, 41, 17, 15]);
  const [options] = useState({
    chart: {
      width: 300,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
    },
    dataLabels: {
        enabled: true,
        formatter: (val, opts) => {
          const total = opts.w.globals.seriesTotals.reduce((a, b) => a + b, 0);
          const percentage = (val / total * 100).toFixed(1);
          return `${percentage}%`;
        },
    },  
    legend: {
      formatter: function(val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex];
      },
    },
    title: {
      text: 'Gradient Donut with custom Start-angle',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  });

  return (
    <div className='container mx-auto'>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="donut" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default PieChart;


