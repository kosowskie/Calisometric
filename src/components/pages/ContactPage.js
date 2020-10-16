import React from "react";
import {  MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Image from 'react-bootstrap/Image';
import Footer from '../Footer'

const ContactPage = () => {
  return (
      <>
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Kontakt
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Chcesz załapać "zajawkę" ze mną? Umówić się na wspólny trening? 
        Zapraszam do niżej wymienionego kontaktu lub <br/>na social media ;) <br/>
        Również w przypadku zainteresowania moimi projektami czy projektem Calisometric zapraszam do kontaktu czysto biznesowego.
      </p>
      <div class="d-flex justify-content-center">       
      <MDBRow className="text-center w-responsive mx-auto pb-5">
        <MDBCol md="12" className="text-center">
        <Image src="images/zdj2017.png" roundedCircle /><br/><br/> 
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>Z. Nałkowskiej 22A/7</p>
              <p>81-597, Gdynia</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+48 501 029 273</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>kosowskie@protonmail.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
      </div>
    </MDBContainer>
    <Footer />
    </>
  );
}

export default ContactPage;