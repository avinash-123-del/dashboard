import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { IoIosAdd } from "react-icons/io";
import AddWidget from './AddWidget';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <AddWidget show={show} handleClose={handleClose} />
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Dashboard</a>
                    <form className="d-flex gap-2">
                        <Button onClick={handleShow} variant="light" className='border w-100 pb-2'>
                            Add widget <IoIosAdd size={20} color='gray' />


                        </Button>{' '}
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar