import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom'
function Navb() {
    return(
        <div>
      <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand as={Link} to='/Menu'>Tunisia</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link as={Link} to='/Menu'>Home</Nav.Link>
      <Nav.Link as={Link} to='/UserList'>Guest List</Nav.Link>
      
      </Nav>
      </Container>
      </Navbar>
        </div>
    )
}
export default Navb