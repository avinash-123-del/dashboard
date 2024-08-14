import React from 'react'
import PieChart from './PieChart'

const HomePage = () => {
    return (
        <div className=' row mt-4 justify-content-start gap-1 mx-auto'>

            {Array(8).fill(0)?.map((e,i) => (
                <div key={i} className='col-12 col-md-6 col-lg-3 border shadow my-2 rounded'>
                    <PieChart />
                </div>
            ))}
        </div>
    )
}

export default HomePage