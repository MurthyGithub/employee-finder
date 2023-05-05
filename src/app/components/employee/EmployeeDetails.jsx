import { Col, Row, Container, Modal } from 'react-bootstrap';
import employee2 from '../../../images/employee2.jpg'; 

const EmployeeDetails = (props) => {
  const {avatar, jobTitle, age, dateJoined, firstName, lastName, bio} = props?.employee;
  return (  
    <Modal className="modal" {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
         </Modal.Header>
        <Modal.Body className="show-grid">
            <Container>
                <Row>
                    <Col xs={4}>
                        <img src={employee2 ?? avatar} alt="Avatar"/>
                        <div>
                            <span>{jobTitle}</span><br/>
                            <span>age : {age}</span><br/>
                            <span>{new Date(dateJoined).toDateString()}</span>
                        </div>                        
                    </Col>
                    <Col xs={8}>
                        <p>{`${firstName} ${lastName}`}</p>
                        <p>{bio}</p>
                    </Col>
                </Row>   
            </Container>
        </Modal.Body>       
    </Modal>       
  );
}

export default EmployeeDetails;