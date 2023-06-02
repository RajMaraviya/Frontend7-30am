import {React, useState } from 'react';
import { MDBBtn, MDBContainer, MDBModal, MDBModalContent, MDBModalHeader, MDBModalFooter, MDBModalBody, MDBModalTitle, MDBModalDialog } from 'mdb-react-ui-kit';

export default function MdbModal() {
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
  return (
      <>
          <MDBContainer className='p-4 mt-4 bg-secondary shadow-3-strong text-center'>
              <MDBBtn className='btn btn-dark m-3' onClick={toggleShow}>modal</MDBBtn>
              <MDBBtn className='btn btn-success m-3'>Hello</MDBBtn>
          </MDBContainer>
          <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
                Lorem ipsum af crjf ace kenrqgjfrnv biojoiwef  iqrfnckrn 
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>Close</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      </>
  )
}
