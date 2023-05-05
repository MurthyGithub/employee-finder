import {Container} from 'react-bootstrap';
import Header from './common/Header';
import Search from './common/Search';
import EmployeeList from './employee/EmployeeList';

const Dashboard = () => {
  return (
    <Container>
      <Header/> 
      <Search/>
      <EmployeeList/>
    </Container>
  );
}

export default Dashboard;