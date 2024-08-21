import React, { useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { ReactProvider } from '../Context/ReactContext';

const RadarChartInput = ({ open, close }) => {
    const { radarCharts, setRadarCharts, radarTitle, setRadarTitle, radarValues, setRadarValues, setSelectedRadarCharts } = useContext(ReactProvider);

    const handleSubmit = (e) => {
        e.preventDefault();

        const radarArray = radarValues.split(',').map(value => parseFloat(value.trim()));

        const newRadarChart = {
            title: radarTitle,
            data: radarArray
        };

        setRadarCharts([...radarCharts, newRadarChart]);

        setSelectedRadarCharts(prevSelected => ({
            ...prevSelected,
            [newRadarChart.title]: true,
        }));

        // Clear the form
        setRadarTitle('');
        setRadarValues('');
        close();
    };

    return (
        <Modal show={open} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Bookings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <h6 className='text-center'>Add New Bookings</h6>
                    <div>
                        <label>Title </label>
                        <br />
                        <input className='form_inputs'
                            type="text"
                            value={radarTitle}
                            onChange={(e) => setRadarTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Values (comma separated)</label>
                        <br />
                        <input className='form_inputs'
                            type="text"
                            value={radarValues}
                            onChange={(e) => setRadarValues(e.target.value)}
                            required
                        />
                    </div>
                    <div className='text-center'>
                        <button type="submit" className='text-center py-1 px-2 rounded'>Add Chart</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}

export default RadarChartInput;
