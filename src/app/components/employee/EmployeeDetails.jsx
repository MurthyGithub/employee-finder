import { Col, Row, Container, Modal } from 'react-bootstrap';

const EmployeeDetails = (props) => {
  return (  
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
         </Modal.Header>
        <Modal.Body className="show-grid">
            <Container>
                <Row>
                    <Col xs={4}>
                        <p>Employee Image</p>
                        <p>Job Title</p>
                        <p>Age</p>
                        <p>Date Joined</p>
                    </Col>
                    <Col xs={8}>
                        <p>First Name, Last Name</p>
                        <p>Some text</p>
                    </Col>
                </Row>   
            </Container>
        </Modal.Body>       
    </Modal>       
  );
}

export default EmployeeDetails;