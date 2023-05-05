import React, {useState} from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { TABLE_HEADERS } from '../utilities/constant';
import TablePagination from '../common/TablePagination'
import EmployeeDetails from './EmployeeDetails';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchEmployees } from "../../globalStore/employeeSlice"; 
import employee3 from '../../../images/employee3.png';
import employee1 from '../../../images/employee1.jpg';

const EmployeeList = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [page, setPage] = useState(1);
    const [selectedEmployee, setSelectedEmployee] = useState(undefined);
    const employees = useSelector(state => state.employeesInfo.data);
    const status = useSelector(state => state.employeesInfo.status);
    const onPaginatedItemClick = (pageNumber) => {
        setPage(pageNumber)
    }
    useEffect(() => {
        if(status === 'init') {
         dispatch(fetchEmployees()); 
        }      
    }, [dispatch, status]); 

    const onClockRow = (e, id) => {
        e.preventDefault();
        setShowModal(true);
        setSelectedEmployee(employees.find((employee) => employee.id === id));
    }

    const showpageCount  = () => 
        employees.length < 10 ? 
        employees.length:
        (page * 10 > employees.length ? employees.length : page * 10);

    const numberOfPages = () => Math.ceil(employees?.length / 10);
    return (
        <>
            {
                employees?.length &&
                <section className="px-5">
                    <Row>
                        <span>{`showing ${showpageCount()} of ${employees.length}`}</span>              
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
                                { employees.map((employee, index) => (
                                    <tr key={index} onClick={ (e) => onClockRow(e, employee.id)}>                                       
                                        <td>{employee.id.substr(0,8)}</td> 
                                        <td className="avatar">
                                            <img src={(index % 2 ? employee3 : employee1) ?? employee.avatar} alt="Avatar"/>
                                            {`${employee.firstName} ${employee.lastName}`}
                                        </td>
                                        <td>{employee.contactNo}</td>
                                        <td>{employee.address}</td>                                        
                                    </tr>
                                ))
                                }
                                
                            </tbody>
                        </Table>
                    </Row>  
                    <Row>
                        <Col sm={{span: 4, offset: 8}}>  
                            <TablePagination pages={numberOfPages()} onPaginatedItemClick={onPaginatedItemClick}/>
                        </Col>
                    </Row>     
                </section>
            }    
            <section>
                {selectedEmployee && <EmployeeDetails employee={selectedEmployee} show={showModal} onHide={() => setShowModal(false)}/>}
            </section>
        </>
    )      
}

export default EmployeeList;