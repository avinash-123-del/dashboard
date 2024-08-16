
import React, { useContext, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ReactProvider } from '../Context/ReactContext';
import { Button } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import BarChartInput from './BarChartInput';

const BarChart = () => {
    const { charts, selectedCharts } = useContext(ReactProvider);
    const [openBar, setOpenbar] = useState(false)


    // Filter charts to show only those selected
    const filteredCharts = charts.filter(chart => selectedCharts[chart.title]);

    return (
        <>
            <BarChartInput open={openBar} close={() => setOpenbar(false)} />

            <div className='row' >
                {filteredCharts.length > 0 && filteredCharts.map((chart, index) => {
                    const options = {
                        chart: {
                            type: 'bar',
                            height: 300
                        },
                        xaxis: {
                            type: 'category',
                            labels: {
                                formatter: function (val) {
                                    return val;
                                }
                            }
                        },
                        title: {
                            text: chart.title || `Chart ${index + 1}`,
                        },
                        tooltip: {
                            x: {
                                formatter: function (val) {
                                    return "Value: " + val;
                                }
                            }
                        },
                    };

                    const series = [{
                        name: "Sales",
                        data: chart.data || []
                    }];

                    return (
                        <div className='col-3 border mx-2 shadow' key={index} style={{ marginBottom: '20px' }}>
                            <h4 className='text-center'>{chart.title || `Chart ${index + 1}`}</h4>
                            <ReactApexChart options={options} series={series} type="bar" height={380} />
                        </div>
                    );
                })}
                <div className='BarChart_Add border shadow col-3'>
                    <Button onClick={() => setOpenbar(true)} variant="light" className='border pb-2'>
                        <IoIosAdd size={20} color='gray' />  Add widget
                    </Button>{' '}
                </div>
            </div>
        </>

    );
};

export default BarChart;
