import React from 'react'
import PieChart from './PieChart/PieChart'
import BarChart from './Barchart/BarChart'
import RadarChart from './RadarChart/RadarChart'


const HomePage = () => {

    return (
        <>
            <div className='mt-5 pt-5 row justify-content-start w-100 mx-auto'>
                <h4 className='text-center'>CWPP</h4>
                <div className=' border shadow my-2 rounded'>
                    <PieChart />
                </div>
            </div>
            <div className='mt-3 row justify-content-start w-100'>
                <h4 className='text-center'>Tickets</h4>
                <div className=' border shadow my-2 rounded'>
                    <BarChart />
                </div>
            </div>

            <div className='mt-3 row justify-content-start w-100'>
                <h4 className='text-center'>Bookings</h4>
                <div className=' border shadow my-2 rounded'>
                    <RadarChart />
                </div>
            </div>
        </>
    )
}

export default HomePage