import React, { useContext, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ReactProvider } from '../Context/ReactContext';
import { Button } from 'react-bootstrap';
import { IoIosAdd } from 'react-icons/io';
import PieChartInputs from './PieChartinputs'; // Import the PieChartInput component

const PieChart = () => {
    const { pieCharts, selectedCharts } = useContext(ReactProvider);
    const [openPie, setOpenPie] = useState(false);

    // Filter charts to show only those selected
    const filteredCharts = pieCharts.filter(chart => selectedCharts[chart.title]);

    return (
        <>
            <PieChartInputs open={openPie} close={() => setOpenPie(false)} />

            <div className='row'>
                {filteredCharts.length > 0 && filteredCharts.map((chart, index) => {
                    const options = {
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
                            formatter: function (val, opts) {
                                return val + " - " + opts.w.globals.series[opts.seriesIndex];
                            },
                        },
                        title: {
                            text: chart.title || `Chart ${index + 1}`,
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
                    };

                    const series = chart.data.map(dataPoint => dataPoint.value);

                    return (
                        <div className='col-3 border mx-2 shadow' key={index} style={{ marginBottom: '20px' }}>
                            <h4 className='text-center'>{chart.title || `Chart ${index + 1}`}</h4>
                            <ReactApexChart options={options} series={series} type="donut" width={380} />
                        </div>
                    );
                })}
                <div className='PieChart_Add border shadow col-3'>
                    <Button onClick={() => setOpenPie(true)} variant="light" className='border pb-2'>
                        <IoIosAdd size={20} color='gray' /> Add widget
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PieChart;
