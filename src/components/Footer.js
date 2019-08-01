import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'gatsby';
import './footer.scss';


class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="Footer">
                    <Container>
                        <Row>
                            <Col xs={12} md={6} className="Logo">
                                Spencer Marx
                            </Col>
                            <Col class="col-12 col-md-6">
                                <div class="Footer_social-icons d-flex justify-content-center justify-content-md-end">
                                    <span class="Footer_social-icon-wrapper d-flex justify-content-center align-items-center"
                                        onclick="window.location.href = 'mailto:hello@yourrestaurant.online?subject=Hi%20there!'">
                                        <svg class="Footer__social-icon" width="100" height="100" viewBox="0 0 100 100" fill="none"
                                            alt="Email icon" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)" fill="#000">
                                                <path
                                                    d="M25.759 40.96c.759.536 3.047 2.126 6.864 4.771 3.817 2.645 6.74 4.682 8.772 6.11.223.157.697.497 1.423 1.022.725.525 1.328.949 1.808 1.272.48.324 1.06.687 1.74 1.088a10.1 10.1 0 0 0 1.926.903c.603.202 1.161.302 1.674.302h.068c.513 0 1.071-.1 1.674-.302.602-.2 1.245-.502 1.925-.903.68-.402 1.261-.764 1.741-1.088.48-.323 1.082-.747 1.808-1.272.725-.525 1.2-.865 1.423-1.022 2.053-1.428 7.277-5.056 15.67-10.882a15.905 15.905 0 0 0 4.084-4.118C79.453 35.235 80 33.55 80 31.786c0-1.473-.53-2.735-1.59-3.784-1.061-1.049-2.317-1.573-3.767-1.573H25.357c-1.719 0-3.041.58-3.968 1.74C20.463 29.332 20 30.782 20 32.523c0 1.407.614 2.93 1.841 4.57 1.228 1.642 2.534 2.93 3.918 3.868z" />
                                                <path
                                                    d="M76.651 44.542c-7.32 4.955-12.879 8.806-16.673 11.552a79.074 79.074 0 0 1-3.097 2.193c-.793.524-1.847 1.06-3.164 1.607-1.317.547-2.544.82-3.683.82h-.067c-1.139 0-2.367-.273-3.684-.82-1.316-.547-2.371-1.083-3.163-1.607a79.312 79.312 0 0 1-3.097-2.193c-3.014-2.21-8.56-6.06-16.641-11.552A17.735 17.735 0 0 1 20 41.63v26.585c0 1.474.524 2.734 1.574 3.783 1.049 1.05 2.31 1.574 3.783 1.574h49.286c1.473 0 2.734-.524 3.784-1.574 1.049-1.05 1.573-2.31 1.573-3.783V41.63a18.457 18.457 0 0 1-3.349 2.912z" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <path fill="#000" transform="translate(20 20)" d="M0 0h60v60H0z" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    <span class="Footer_social-icon-wrapper d-flex justify-content-center align-items-center"
                                        onclick="window.open('https://www.facebook.com/yourrestaurantonline', '_blank')">
                                        <svg class="Footer__social-icon" width="100" height="100" viewBox="0 0 100 100" fill="none"
                                            alt="Facebook icon" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M63.887 23.011L56.937 23c-7.81 0-12.855 5.177-12.855 13.191v6.082h-6.99c-.603 0-1.092.49-1.092 1.093v8.813c0 .603.49 1.093 1.093 1.093h6.988v22.235c0 .604.49 1.093 1.093 1.093h9.118c.604 0 1.093-.49 1.093-1.093V53.271h8.172c.604 0 1.093-.489 1.093-1.093l.003-8.811a1.095 1.095 0 0 0-1.094-1.094h-8.174v-5.156c0-2.478.59-3.736 3.819-3.736l4.682-.002c.604 0 1.093-.49 1.093-1.092v-8.183c0-.603-.489-1.092-1.092-1.093z"
                                                fill="#000" /></svg>
                                    </span>
                                    <span class="Footer_social-icon-wrapper d-flex justify-content-center align-items-center"
                                        onclick="window.open('https://www.instagram.com/your_restaurant_online/', '_blank')">
                                        <svg class="Footer__social-icon" width="100" height="100" viewBox="0 0 100 100" fill="none"
                                            alt="Instagram icon" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M64.188 14H36.811C24.215 14 14 24.215 14 36.813v27.374C14 76.785 24.215 87 36.813 87h27.374C76.785 87 87 76.785 87 64.187V36.814C87 24.215 76.785 14 64.187 14zm15.968 50.188c0 8.805-7.163 15.968-15.969 15.968H36.814c-8.806 0-15.97-7.163-15.97-15.969V36.814c0-8.806 7.164-15.97 15.97-15.97h27.374c8.806 0 15.97 7.164 15.97 15.97v27.374z"
                                                fill="#000" />
                                            <path
                                                d="M50.5 32.25c-10.079 0-18.25 8.171-18.25 18.25s8.171 18.25 18.25 18.25 18.25-8.171 18.25-18.25-8.171-18.25-18.25-18.25zm0 29.656c-6.287 0-11.406-5.119-11.406-11.406 0-6.292 5.119-11.406 11.406-11.406 6.287 0 11.406 5.114 11.406 11.406 0 6.287-5.119 11.406-11.406 11.406zm19.619-28.593a2.432 2.432 0 1 0 0-4.863 2.432 2.432 0 0 0 0 4.863z"
                                                fill="#000" /></svg>
                                    </span>
                                </div>
                                <div class="sm--footer__social-encouragement d-flex justify-content-center justify-content-md-end">
                                    Check me out on social media!
                                </div>
                            </Col>
                        </Row>
                        <Row class="Footer__signature row">
                            <Col className="text-center">
                                <p class="my-0">© 2018 All Rights Reserved | Spencer Marx</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;