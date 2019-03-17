import React, { Component } from 'react';
import { Row, Col, Button, FormGroup, Input } from "reactstrap";

class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <h1>Dashboard</h1>
                            <Button color='info' >Modal</Button>
                            <FormGroup>
                                <label>Postal Code</label>
                                <Input placeholder="ZIP Code" type="number" color='info' />
                            </FormGroup>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Dashboard;