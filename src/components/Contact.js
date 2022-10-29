import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

function Contact(props) {
  return (
    <div>
     <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Please Fill up the form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
        <MDBRow className='mb-4'>
          <MDBCol>
            <MDBInput id='form3Example1' label='First name' />
          </MDBCol>
          <MDBCol>
            <MDBInput id='form3Example2' label='Last name' />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          
        </MDBRow>
          <MDBCheckbox
            wrapperClass='d-flex justify-content-center mb-4'
            id='form4Example4'
            label='Send me a copy of this message'
            defaultChecked
          />

          <MDBBtn type='submit' className='mb-4' block>
            Send
          </MDBBtn>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Contact