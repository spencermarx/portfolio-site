import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import SocialIcon from "@components/molecules/SocialIcon/SocialIcon";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <Container>
        <Row>
          <Col xs={12} md={6} className="Footer-Logo">
            <Link className="Logo" to="/">
              Spencer Marx
            </Link>
          </Col>
          <Col className="col-12 col-md-6">
            <div className="Footer-SocialIcons d-flex justify-content-center justify-content-md-end">
              <SocialIcon icon="email" color="black" />
              <SocialIcon icon="github-default" color="black" />
              <SocialIcon icon="linkedIn" color="black" />
            </div>
          </Col>
        </Row>
        <Row className="Footer-Signature row mt-5">
          <Col className="text-center">
            <p className="my-0">© 2021 All Rights Reserved | Spencer Marx</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
