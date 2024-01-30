import React from "react";
import { Alert, Container, Row, Col } from 'reactstrap';
import './style.css'

class MyApp extends React.Component{
    render(){
        return(
            <>
                <h1 className="firstText">Hello react</h1>
                <p>lorem ipsum</p>
                <Container>
                    <Row>
                        <Col md="4">
                            <Alert color="danger">
                                Salom oshna
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default MyApp;