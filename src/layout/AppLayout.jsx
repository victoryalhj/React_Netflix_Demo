import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link, useNavigate } from "react-router-dom";



const AppLayout = () => {
  const [keyword,setKeyword] = useState("");
  const navigate = useNavigate()

  const searchByKeyword=(event)=>{
    event.preventDefault()
    // url을 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");

  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary p-0">
        <Container fluid className="navbar-area">
          <Navbar.Brand href="#">
            <img className="navbar-logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies" className="text-white">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 custom-search"
                aria-label="Search"
                value={keyword}
                onChange={(event)=> setKeyword(event.target.value)}
              />
              <Button variant="danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet/>
    </div>
  );
};

export default AppLayout;
