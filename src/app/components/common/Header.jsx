import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
        <header className="header mx-auto py-4">
            <Row>
                <Col xs={{span: 6}}>
                    <h3>Company Name</h3>                   
                </Col>               
            </Row>
            <Row>
            <Col xs={{span: 6 }}>                   
                    <small>Company Motto</small>
                </Col>
                <Col className="right-text" xs={{span: 6}}>  
                    <span >Since (Company Establishment Date)</span>
                </Col>
            </Row>
        </header>
    )      
}

export default Header;

