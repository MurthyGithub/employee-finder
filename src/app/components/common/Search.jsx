import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Search = () => {
    return (
        <section className="search py-5">
            <Row>
                <Col sm={{span: 5, offset: 7}}>                   
                   <form>                  
                        <input type="text" id="search1" name="text-search"/>
                        <input type="text" id="search2" name="employee-search" placeholder="Search"/>
                   </form>
                </Col>
            </Row>
        </section>
    )      
}

export default Search;

