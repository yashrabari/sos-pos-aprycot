import React from 'react'
import { Col,Container,Row, Breadcrumb } from 'react-bootstrap'

import Card from '../../../components/card'

const Breadcrumbs = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm="12" lg="6">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Breadcrumb</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code></p>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                                <Breadcrumb.Item active>Home</Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active>Library</Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm="12" lg="6">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Breadcrumb With Icon</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code> with Icon</p>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                                <Breadcrumb.Item active>
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                                <Breadcrumb.Item href="#">
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Library
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-light">
                                <Breadcrumb.Item href="#">
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" lg="6">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Breadcrumb</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>use class <code>.breadcrumb .bg-primary</code></p>
                            <Breadcrumb bsPrefix="breadcrumb bg-primary">
                                <Breadcrumb.Item active className="text-white">Home</Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-primary">
                                <Breadcrumb.Item className="text-white">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active className="text-white">Library</Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-primary">
                                <Breadcrumb.Item className="text-white">Home</Breadcrumb.Item>
                                <Breadcrumb.Item className="text-white">Library</Breadcrumb.Item>
                                <Breadcrumb.Item active className="text-white">Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm="12" lg="6">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Breadcrumb With Icon</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>use class <code>.breadcrumb .bg-primary </code> With Icon.</p>
                            <Breadcrumb bsPrefix="breadcrumb bg-primary">
                                <Breadcrumb.Item active className="text-white">
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-primary">
                                <Breadcrumb.Item className="text-white">
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active className="text-white">Library</Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-primary">
                                <Breadcrumb.Item className="text-white">
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item className="text-white">Library</Breadcrumb.Item>
                                <Breadcrumb.Item active className="text-white">Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col sm="12" lg="6">
                    <div className="card">
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Breadcrumb With Icon</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>use class <code>.breadcrumb .bg-soft-primary</code></p>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                                <Breadcrumb.Item active>
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                                <Breadcrumb.Item href="#">
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Library</Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-primary">
                                <Breadcrumb.Item href="#">
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Body>
                    </div>
                    </Col>
                    <Col sm="12" lg="6">
                    <Card>
                        <Card.Header>
                            <Card.Header.Title>
                                <h4 className="card-title">Breadcrumb With Icon</h4>
                            </Card.Header.Title>
                        </Card.Header>
                        <Card.Body>
                            <p>use class <code>.breadcrumb .bg-soft-danger</code></p>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-danger">
                                <Breadcrumb.Item active>
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-danger">
                                <Breadcrumb.Item className="text-danger">
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Library</Breadcrumb.Item>
                            </Breadcrumb>
                            <Breadcrumb bsPrefix="breadcrumb bg-soft-danger">
                                <Breadcrumb.Item className="text-danger">
                                    <svg width="14" height="14" className="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    Home
                                </Breadcrumb.Item>
                                <Breadcrumb.Item className="text-danger">Library</Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Breadcrumbs;