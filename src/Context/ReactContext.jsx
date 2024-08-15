import React, { createContext, useState } from "react";

export const ReactProvider = createContext()

const Context = ({ children }) => {

    //------------ bar chart----------
    const [charts, setCharts] = useState([]);
    const [title, setTitle] = useState('');
    const [xValues, setXValues] = useState('');
    const [yValues, setYValues] = useState('');

    const value = {

        //----------- Bar Charts --------------
        charts, setCharts,
        yValues, setYValues,
        xValues, setXValues,
        title, setTitle

    }

    return (
        <ReactProvider.Provider value={value}>
            {children}
        </ReactProvider.Provider>
    )
}

export default Context;