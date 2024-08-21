import React, { useContext, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ReactProvider } from '../Context/ReactContext';
import { Button } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import RadarChartInput from './RadarChartInput';

const RadarChart = () => {
  const { radarCharts, selectedRadarCharts } = useContext(ReactProvider);

  const [openRadar, setOpenRadar] = useState(false);

  const filteredCharts = radarCharts.filter(chart => selectedRadarCharts[chart.title]);

  return (
    <>
    <RadarChartInput open={openRadar} close={() => setOpenRadar(false)} />

    <div className='row justify-content-center p-2 justify-content-lg-start'>
      {filteredCharts.length > 0 && filteredCharts.map((chart, index) => {
        const options = {
          chart: {
            type: 'radar',
            height: 350
          },
          title: {
            text: chart.title || `Chart ${index + 1}`,
          },
          xaxis: {
            categories: chart.data.map((_, i) => `Category ${i + 1}`)
          }
        };

        const series = [{
          name: chart.title,
          data: chart.data
        }];

        return (
          <div className='col-12 col-md-6 col-lg-3 border shadow set-position' key={index} style={{ marginBottom: '20px' }}>
            <h4 className='text-center'>{chart.title || `Chart ${index + 1}`}</h4>
            <ReactApexChart options={options} series={series} type="radar" height={300} />
          </div>
        );
      })}
      <div className='BarChart_Add border shadow col-12 col-md-6 col-lg-3'>
        <Button onClick={() => setOpenRadar(true)} variant="light" className='border pb-2'>
          <IoIosAdd size={20} color='gray' /> Add widget
        </Button>
      </div>
    </div>
    </>

  );
};

export default RadarChart;
