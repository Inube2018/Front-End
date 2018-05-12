import React from 'react';
import { Collapse, CardBody, Card, Button, Col, Row, Container, Input } from 'reactstrap';

export default class NegocioSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            editEnabled: false,
        };
        this.toggle = this.toggle.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.acceptChanges = this.acceptChanges.bind(this);
    }

    toggle() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    editHandler() {
        this.setState({
            editEnabled: !this.state.editEnabled,
        });
    }

    acceptChanges() {
        let nombre = document.getElementById('nameEdit').value === '' ? document.getElementById('nameEdit').placeholder : document.getElementById('nameEdit').value;
        let zipCode = document.getElementById('zipCodeEdit').value === '' ? document.getElementById('zipCodeEdit').placeholder : document.getElementById('zipCodeEdit').value;
        let businessTypeEdit = document.getElementById('businessTypeEdit').value === 'Eliga una opción' ? this.props.business.businessType : document.getElementById('businessTypeEdit').value;
        let averageSellEdit = document.getElementById('averageSellEdit').value === '' ? document.getElementById('averageSellEdit').placeholder : document.getElementById('averageSellEdit').value;
        let editData = [nombre, zipCode, businessTypeEdit, averageSellEdit]; 
        this.setState({
            editEnabled: !this.state.editEnabled,
        });
        this.props.acceptChanges(editData, this.props.index);
    }

    render() {
        if (!this.state.editEnabled) {
            return (
                <div style={{width: '100%', margin: '10px'}}>
                    {/*<Button style={{width: '100%', borderColor: 'grey', textAlign: 'left'}} color="white" onClick={this.toggle}> {this.props.business.businessName} </Button>
                    <Collapse isOpen={true}>*/}
                        <Card>
                            <CardBody>
                                <Container>
                                    <Row>
                                        <Col md='10'>
                                            <strong>Nombre: </strong> {this.props.business.businessName} <br/>
                                            <strong>Código Postal: </strong> {this.props.business.businessZipCode} <br/>
                                            <strong>Tipo de Negocio: </strong> {this.props.business.businessType} <br/>
                                            <strong>Precio medio: </strong> {this.props.business.businessPrice}
                                        </Col>
                                        <Col md='2'>
                                            <Button onClick={() => this.editHandler()}> Editar </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </CardBody>
                        </Card>
                    {/*</Collapse>*/}
                </div>
            )
        } else {
            return (
                <div style={{width: '100%', margin: '10px'}}>
                    {/*<Button style={{width: '100%', borderColor: 'grey', textAlign: 'left'}} color="white" onClick={this.toggle}> {this.props.business.businessName} </Button>
                    <Collapse isOpen={true}>*/}
                        <Card>
                            <CardBody>
                                <Container>
                                    <Row>
                                        <Col md='10'>
                                            <strong>Nombre: </strong> <Input type="email" id="nameEdit" placeholder={this.props.business.businessName}/> <br/>
                                            <strong>Código Postal: </strong> <Input type="email" id="zipCodeEdit" placeholder={this.props.business.businessZipCode}/> <br/>
                                            <strong>Tipo de Negocio: </strong> <Input type="select" name="select" id="businessTypeEdit">
                                                                                    <option>Eliga una opción</option>
                                                                                    <option>Restaurante</option>
                                                                                    <option>Cafetería</option>
                                                                                    <option>Bar</option>
                                                                                </Input> <br/>
                                            <strong>Precio medio: </strong> <Input type="email" id="averageSellEdit" placeholder={this.props.business.businessPrice}/>
                                        </Col>
                                        <Col md='2'>
                                            <Button onClick={() => this.acceptChanges()}> Aceptar </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </CardBody>
                        </Card>
                    {/*</Collapse>*/}
                </div>
            )

        }
    }

}