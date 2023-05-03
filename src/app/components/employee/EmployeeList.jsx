import React, {useState} from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { TABLE_HEADERS } from '../utilities/constant';
import TablePagination from '../common/TablePagination'
import EmployeeDetails from './EmployeeDetails';

const EmployeeList = () => {
    const [showModal, setShowModal] = useState(false);
    const onPaginatedItemClick = (pageNumber) => {
        alert(pageNumber);
    }

    const onClockRow = (e, row) => {
        setShowModal(true);
    }

    return (
        <>
        <section className="px-5">
            <Row>
                <span>showing 10 of 500</span>              
            </Row>
            <Row  className="py-3">
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            {TABLE_HEADERS.map((header, index) => (
                                <th key={index}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={ (e) => onClockRow(e)}>
                            {Array.from({ length: 4 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                             {Array.from({ length: 4 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                        <tr>
                             {Array.from({ length: 4 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </Row>  
            <Row>
                <Col sm={{span: 4, offset: 8}}>  
                    <TablePagination onPaginatedItemClick={onPaginatedItemClick}/>
                </Col>
            </Row>     
        </section>
        <section>
            <EmployeeDetails show={showModal} onHide={() => setShowModal(false)}/>
        </section>
        </>
    )      
}

export default EmployeeList;