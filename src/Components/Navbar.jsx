import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { IoIosAdd } from "react-icons/io";
import AddWidget from './AddWidget';
import { ListGroup } from 'react-bootstrap';
import { ReactProvider } from '../Context/ReactContext';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [searchData, setSearchData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showList, setShowList] = useState(false)

    const { charts, pieCharts, radarCharts } = useContext(ReactProvider);

    const allItems = [...charts, ...pieCharts, ...radarCharts];

    useEffect(() => {
        setSearchData(allItems);
    }, [charts, pieCharts, radarCharts]);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        if (query.length > 0) {
            setShowList(true)
            const filteredData = allItems.filter((data) => data.title.toLowerCase().includes(query));
            setSearchData(filteredData);
        } else {
            setShowList(false)
            setSearchData(allItems);
        }
    };


    return (
        <div className='position-fixed top-0 w-100' style={{ zIndex: "1000" }}>
            <AddWidget show={show} handleClose={handleClose} />
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">AccuKnox</a>
                    <div className='flex'>

                        <ul className='flex gap-3 d-none d-lg-flex me-3 pt-3'>
                            <li>CWPP({pieCharts?.length})</li>
                            <li>Tickets ({charts?.length}) </li>
                            <li>Images ({radarCharts?.length}) </li>
                        </ul>

                    <form className="d-flex gap-2 position-relative">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleSearch}
                            value={searchQuery}
                        />
                        <Button onClick={handleShow} variant="light" className='border w-100 pb-2'>
                            Add widget <IoIosAdd size={20} color='gray' />
                        </Button>
                        {showList && <div className='search_section col-12 col-md-6 col-lg-6'>
                            <ListGroup>
                                {searchData?.map((e, i) => (
                                    <ListGroup.Item key={i}>
                                        <span>{e.title}</span>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>}
                    </form>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;
