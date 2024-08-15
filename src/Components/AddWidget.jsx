import React, { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { IoIosAdd, IoMdClose } from "react-icons/io";
import { Button, Form, InputGroup } from 'react-bootstrap';
import { ReactProvider } from '../Context/ReactContext';
import BarChartInput from '../Barchart/BarChartInput';

const AddWidget = ({ show, handleClose }) => {
    const [open, setOpenbar] = useState(false);
    const { charts} = useContext(ReactProvider);

    // State to manage which charts are selected
    const [selectedCharts, setSelectedCharts] = useState({});

    // Handle checkbox change
    const handleCheckboxChange = (title) => {
        console.log("title" , title);
        setSelectedCharts(prevState => ({
            ...prevState,
            [title]: !prevState[title]
        }));
    };

    console.log("selectedCharts" , selectedCharts);
    

    return (
        <div>
            <BarChartInput open={open} close={() => setOpenbar(false)} />

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
                <Offcanvas.Body>
                    <p>Personalize your dashboard by adding the following widgets</p>
                    <div>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="CSPM">
                                <div>
                                    {charts.length > 0 &&
                                        <div>
                                            {charts.map((e, i) => (
                                                <InputGroup className="mb-3" key={i}>
                                                    <InputGroup.Checkbox defaultChecked
                                                        aria-label="Checkbox for following text input"
                                                        checked={!!selectedCharts[e.title]}
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
                                    <Button onClick={() => { setOpenbar(true); handleClose() }} variant="light" className='border pb-2'>
                                        <IoIosAdd size={20} color='gray' />  Add CSPM
                                    </Button>
                                </div>
                            </Tab>
                            <Tab eventKey="profile" title="CWPP">
                                CWPP
                            </Tab>
                            <Tab eventKey="contact" title="Image">
                                Image
                            </Tab>
                        </Tabs>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default AddWidget;
