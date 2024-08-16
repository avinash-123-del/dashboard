import React, { createContext, useState } from "react";

export const ReactProvider = createContext()

const Context = ({ children }) => {

    //------------ bar chart----------
    const [charts, setCharts] = useState([]);
    const [title, setTitle] = useState('');
    const [xValues, setXValues] = useState('');
    const [yValues, setYValues] = useState('');
    const [selectedCharts, setSelectedCharts] = useState({});


    //--------------- Pie Chat-----------------
    const [pieCharts, setPieCharts] = useState([]);
    const [pieTitle, setPieTitle] = useState('');
    const [pieValues, setPieValues] = useState('');
    const [pieLabels, setPieLabels] = useState('');
    const [selectedPieCharts, setSelectedPieCharts] = useState({});

    const value = {

        //----------- Bar Charts --------------
        charts, setCharts,
        yValues, setYValues,
        xValues, setXValues,
        title, setTitle,
        selectedCharts, setSelectedCharts

        //------------ Pie Charts ---------------
        , pieCharts, setPieCharts,
        pieValues, setPieValues,
        pieTitle, setPieTitle,
        selectedPieCharts, setSelectedPieCharts

    }

    return (
        <ReactProvider.Provider value={value}>
            {children}
        </ReactProvider.Provider>
    )
}

export default Context;