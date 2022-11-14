import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { render } from "@testing-library/react";

export const Lokasi = () => {
    
  return (
    <section className="project">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
        <Container>
     <h2>Lokasi</h2>

        </Container>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="">
        </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
 
}
