import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Contact from './Contact';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Header() {
  
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className='head'>
        {['sm'].map((expand) => (
        <Navbar style={{ height: '7vh' }} variant='light' key={expand}   expand={expand} className="mb-3">
          <Container>
            <Navbar.Brand href="#"></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link style={{ padding: '10px'}} href = '/homepage'>HOME</Nav.Link>
                  <Nav.Link style={{ padding: '10px 20px 10px 10px',}} disabled href="/projects">PROJECTS</Nav.Link>
                  <Button style={{ color: 'white',
                                    backgroundColor: '#3C403D',
                                    borderRadius: '3px',
                                    fontWeight: '500',
                                    fontSize: '1.02em',
                                    borderStyle: 'hidden',
                                    padding: '10px' }}
                          onClick={() => {
                            setOpenModal(true)
                          }}>Contact Me</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
       {openModal &&
        <Contact  show={openModal} onHide={() => setOpenModal(false)} />}
    </div>
  )
}

export default Header