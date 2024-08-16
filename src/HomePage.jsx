import React, { useContext, useState } from 'react'
import PieChart from './PieChart/PieChart'
import BarChart from './Barchart/BarChart'
import RadarChart from './RadarChart'
import { Button } from 'react-bootstrap'
import { IoIosAdd } from 'react-icons/io'
import BarChartInput from './Barchart/BarChartInput'
import { ReactProvider } from './Context/ReactContext'


const HomePage = () => {

    return (
        <>


            <div className='row justify-content-start w-100'>
                <h4 className='text-center'>Pie Chart</h4>
                <div className=' border shadow my-2 rounded'>
                    <PieChart />
                </div>
            </div>
            <div className='row justify-content-start w-100'>
                <h4 className='text-center'>Bar Chart</h4>
                <div className=' border shadow my-2 rounded'>
                    <BarChart />
                </div>
            </div>

            <div className='row mt-4 justify-content-start gap-1 mx-auto'>
                <h4 className='text-center'>Radar Chart</h4>
                {Array(3).fill(0)?.map((e, i) => (
                    <div key={i} className='col-12 col-md-6 col-lg-3 border shadow my-2 rounded'>
                        <RadarChart />
                    </div>
                ))}
            </div>
        </>
    )
}

export default HomePage