import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import ProfileDropdown from "../userDropdown";
export default function App() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Smail
        </Navbar.Brand>
        <Nav className="ms-auto">
          <ProfileDropdown />
        </Nav>
      </Container>
    </Navbar>
  );
}
