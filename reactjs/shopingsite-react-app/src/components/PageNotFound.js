import React from 'react';
import err from '../img/interactive-404.gif';
import { MDBContainer } from 'mdb-react-ui-kit'


export default function PageNotFound() {
  return (
    <div>
<MDBContainer className='mt-5 h-50 bg-transparent'>
      <center>
        <img alt='404' src={err} className='h-100 shadow-5-strong' />
      </center>
</MDBContainer>
    </div>
  )
}
