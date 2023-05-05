import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react';
import { fetchCompany } from "../../globalStore/companySlice";

const Header = () => {
    const companyInfo = useSelector(state => state.companyInfo);
    const dispatch = useDispatch();
    useEffect(() => {
        if(companyInfo.status === "init") {
            dispatch(fetchCompany())
        }
    }, [dispatch, companyInfo.status]);
    
    return companyInfo?.data ? (
        <header className="header mx-auto py-4">
            <Row>
                <Col xs={{span: 6}}>
                    <h3>{companyInfo.data.companyName}</h3>                   
                </Col>               
            </Row>
            <Row>
            <Col xs={{span: 6 }}>                   
                    <small>{companyInfo.data.companyMotto}</small>
                </Col>
                <Col className="right-text" xs={{span: 6}}>  
                    <span >Since ({new Date(companyInfo.data.companyEst).toDateString()})</span>
                </Col>
            </Row>
        </header>
    ): <div>loading</div>;    
    
     
}

export default Header;

