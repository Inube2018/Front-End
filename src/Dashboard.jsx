import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Graphic from './Graphic.jsx'
import Filter from './Filter.jsx';
var FontAwesome = require('react-fontawesome');

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md='3'>
                            <Filter/>
                        </Col>
                        <Col md='9'>
                            <Graphic/>
                        </Col>
                    </Row>
                </Container>


            </div>
        );

    }
}

