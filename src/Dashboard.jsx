import React from 'react';
import { Container, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import Graphic from './Graphic.jsx';
import GraphicTypes from './GraphicTypes.jsx';

var FontAwesome = require('react-fontawesome');


export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            Graphic_number:4
        };

    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
                <Container fluid className='dashboard' style={{marginTop: '1%', marginBottom: '2%'}}>
                    <Row>
                        <Col md='2'>
                            <GraphicTypes />
                        </Col>
                        <Col md='10'>
                            <Row style={{marginBottom: '15px'}}>
                                <Col md='9'/>
                                <Col md='3'>
                                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle caret color="warning">
                                            Configuración de dashboard
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem header>EN CONSTRUCCIÓN</DropdownItem>
                                            <DropdownItem>1</DropdownItem>
                                            <DropdownItem divider/>
                                            <DropdownItem>2</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6'>
                                    <Graphic/>
                                </Col>
                                <Col md='6'>
                                    <Graphic/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6'>
                                    <Graphic/>
                                </Col>
                                <Col md='6'>
                                    <Graphic/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

