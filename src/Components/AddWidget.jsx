import React, { useContext, useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IoIosAdd, IoMdClose } from "react-icons/io";
import { Button, Form, InputGroup } from 'react-bootstrap';
import { ReactProvider } from '../Context/ReactContext';
import BarChartInput from '../Barchart/BarChartInput';
import PieChartInputs from '../PieChart/PieChartInputs'; // Import the PieChartInput component

const AddWidget = ({ show, handleClose }) => {
    const [openBar, setOpenBar] = useState(false);
    const [openPie, setOpenPie] = useState(false);
    const { charts, pieCharts, setSelectedCharts } = useContext(ReactProvider);

    const [tempCharts, setTempCharts] = useState({});

    useEffect(() => {
        const allCharts = [...charts, ...pieCharts];
        if (allCharts.length > 0) {
            setTempCharts(prevSelected => {
                const initialState = { ...prevSelected };
                allCharts.forEach(chart => {
                    if (initialState[chart.title] === undefined) {
                        initialState[chart.title] = true; 
                    }
                });
                return initialState;
            });
        }
    }, [charts, pieCharts]);

    const handleCheckboxChange = (title) => {
        setTempCharts(prevState => ({
            ...prevState,
            [title]: !prevState[title]
        }));
    };

    const handleConfirm = () => {
        setSelectedCharts(tempCharts);
        handleClose();
    };

    return (
        <div>
            <BarChartInput open={openBar} close={() => setOpenBar(false)} />
            <PieChartInputs open={openPie} close={() => setOpenPie(false)} />

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header style={{ backgroundColor: "#00008B" }}>
                    <Offcanvas.Title className='text-white w-100'>
                        <div className='d-flex justify-content-between'>
                            <p>Add Widget</p>
                            <p className='cp'>
                                <IoMdClose onClick={handleClose} />
                            </p>
                        </div>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='position-relative'>
                    <p>Personalize your dashboard by adding the following widgets</p>
                    <div>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="CSPM">
                                <div>
                                    {charts.length > 0 &&
                                        <div>
                                            {charts.map((e, i) => (
                                                <InputGroup className="mb-3" key={i}>
                                                    <InputGroup.Checkbox
                                                        aria-label="Checkbox for following text input"
                                                        checked={!!tempCharts[e.title]}
                                                        onChange={() => handleCheckboxChange(e.title)}
                                                    />
                                                    <Form.Control
                                                        readOnly
                                                        aria-label="Text input with checkbox"
                                                        value={e.title}
                                                    />
                                                </InputGroup>
                                            ))}
                                        </div>
                                    }
                                    <Button onClick={() => { setOpenBar(true); handleClose() }} variant="light" className='border pb-2'>
                                        <IoIosAdd size={20} color='gray' /> Add CSPM
                                    </Button>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="CWPP">
                                CWPP
                            </Tab>
                            <Tab eventKey="pie" title="Pie Charts">
                                <div>
                                    {pieCharts.length > 0 &&
                                        <div>
                                            {pieCharts.map((e, i) => (
                                                <InputGroup className="mb-3" key={i}>
                                                    <InputGroup.Checkbox
                                                        aria-label="Checkbox for following text input"
                                                        checked={!!tempCharts[e.title]}
                                                        onChange={() => handleCheckboxChange(e.title)}
                                                    />
                                                    <Form.Control
                                                        readOnly
                                                        aria-label="Text input with checkbox"
                                                        value={e.title}
                                                    />
                                                </InputGroup>
                                            ))}
                                        </div>
                                    }
                                    <Button onClick={() => { setOpenPie(true); handleClose() }} variant="light" className='border pb-2'>
                                        <IoIosAdd size={20} color='gray' /> Add Pie Chart
                                    </Button>
                                </div>
                            </Tab>
                            <Tab eventKey="contact" title="Image">
                                Image
                            </Tab>
                        </Tabs>
                    </div>
                    <div className='d-flex gap-2 position-absolute' style={{ right: "20px", bottom: "20px" }}>
                        <Button onClick={handleClose} variant="light" style={{ color: "#00008B", backgroundColor: "transparent", border: "1px solid #00008B" }} className='border pb-2'>
                            Cancel
                        </Button>
                        <Button onClick={handleConfirm} className='border pb-2 text-white' style={{ backgroundColor: "#00008B" }}>
                            Confirm
                        </Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default AddWidget;
