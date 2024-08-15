import React, { useContext } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ReactProvider } from '../Context/ReactContext';

const BarChart = () => {
    const { charts } = useContext(ReactProvider);

    // Filter charts to show only those selected
    const filteredCharts = charts.filter(chart => !!chart.selected);

    return (
        <div>
            <div className='row'>
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
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <h4>{chart.title || `Chart ${index + 1}`}</h4>
                            <ReactApexChart options={options} series={series} type="bar" height={380} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BarChart;
