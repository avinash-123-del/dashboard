import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { ReactProvider } from '../Context/ReactContext';

const PieChartInputs = ({ open, close }) => {
    const { pieCharts, setPieCharts, pieLabels, setPieLabels, pieValues, setPieValues, pieTitle, setPieTitle, setSelectedCharts } = useContext(ReactProvider);

    const handleSubmit = (e) => {
        e.preventDefault();

        const labelsArray = pieLabels.split(',').map(label => label.trim());
        const valuesArray = pieValues.split(',').map(value => parseFloat(value.trim()));

        if (labelsArray.length !== valuesArray.length) {
            alert("Labels and Values must have the same length.");
            return;
        }

        const newPieChart = {
            title: pieTitle,
            data: labelsArray.map((label, index) => ({ label, value: valuesArray[index] }))
        };

        setPieCharts([...pieCharts, newPieChart]);

        setSelectedCharts(prevSelected => ({
            ...prevSelected,
            [newPieChart.title]: true,
        }));

        // Clear the form
        setPieTitle('');
        setPieLabels('');
        setPieValues('');
        close();
    };

    return (
        <Modal show={open} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Add Pie Chart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <h6 className='text-center'>Add New Pie Chart</h6>
                    <div>
                        <label>Title </label>
                        <br />
                        <input className='form_inputs'
                            type="text"
                            value={pieTitle}
                            onChange={(e) => setPieTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Labels (comma separated)</label>
                        <br />
                        <input className='form_inputs'
                            type="text"
                            value={pieLabels}
                            onChange={(e) => setPieLabels(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Values (comma separated) </label>
                        <br />
                        <input className='form_inputs'
                            type="text"
                            value={pieValues}
                            onChange={(e) => setPieValues(e.target.value)}
                            required
                        />
                    </div>
                    <div className='text-center'>
                        <button type="submit" className='text-center py-1 px-2 rounded'>Add Pie Chart</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default PieChartInputs;
