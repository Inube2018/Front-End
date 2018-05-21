import React from 'react';
import { Collapse, CardBody, Card, Button, Col, Row, Container, Input, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

export default class NegocioSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            modalPremium: false,
            editEnabled: false,
        };
        this.bePremium = this.bePremium.bind(this);
        this.togglemodalPremium = this.togglemodalPremium.bind(this);
        // this.toggle = this.toggle.bind(this);
        //this.editHandler = this.editHandler.bind(this);
        //this.acceptChanges = this.acceptChanges.bind(this);
    }
    togglemodalPremium() {
        this.setState({
            modalPremium: !this.state.modalPremium
        });
    }
    // toggle() {
    //     this.setState({
    //         collapse: !this.state.collapse,
    //     });
    // }

    // editHandler() {
    //     this.setState({
    //         editEnabled: !this.state.editEnabled,
    //     });
    // }

    // acceptChanges() {
    //     let nombre = document.getElementById('nameEdit').value === '' ? document.getElementById('nameEdit').placeholder : document.getElementById('nameEdit').value;
    //     let zipCode = document.getElementById('zipCodeEdit').value === '' ? document.getElementById('zipCodeEdit').placeholder : document.getElementById('zipCodeEdit').value;
    //     let businessTypeEdit = document.getElementById('businessTypeEdit').value === 'Eliga una opción' ? this.props.business.businessType : document.getElementById('businessTypeEdit').value;
    //     let averageSellEdit = document.getElementById('averageSellEdit').value === '' ? document.getElementById('averageSellEdit').placeholder : document.getElementById('averageSellEdit').value;
    //     let editData = [nombre, zipCode, businessTypeEdit, averageSellEdit];
    //     this.setState({
    //         editEnabled: !this.state.editEnabled,
    //     });
    //     this.props.acceptChanges(editData, this.props.index);
    // }

    bePremium() {
        console.log("Be premium");
        this.setState({
            modalPremium: !this.state.modalPremium
        });
        this.props.bePremium();
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
                                        <Col md='12'>
                                            <div style={{margin: '10px'}}><strong>MID: </strong> {this.props.userInfo.userMid} <br/></div>
                                            <div style={{margin: '10px'}}><strong>Nombre: </strong> {this.props.userInfo.business.businessName} <br/></div>
                                            <div style={{margin: '10px', marginBottom: '6px'}}><strong>Código Postal: </strong> {this.props.userInfo.business.businessZipCode} <br/></div>
                                            <div style={{margin: '10px', marginTop: '0px'}}><strong>Plan premium: </strong> {this.props.userInfo.isPremium ? <p style={{display: 'inline'}}>Su cuenta es premium</p> : <p style={{display: 'inline'}}>Su cuenta no es premium <Button onClick={this.togglemodalPremium} style={{marginLeft: '10px', marginTop: '0px'}} color="info">Quiero ser premium</Button>
                                                <Modal isOpen={this.state.modalPremium} toggle={this.togglemodalPremium} className='premium'>
                                                <ModalHeader toggle={this.togglemodalPremium}> Hazte Premium</ModalHeader>
                                                <ModalBody>
                                                    <p className='text-center'><strong>VENTAJAS DE HACERSE PREMIUM</strong></p>
                                                    <p>Ser cliente Inube premium te proporcionará acceso a una mayor cantidad de contenido que te permitirá tener una perspectiva más completa y global sobre el entorno en el que se ubica tu comercio.</p>
                                                    <p>Por <strong>solo 49,99€ al mes </strong>podrás acceder a una mayor cantidad de gráficas que te permitirán tomar mejores decisiones, aumentando tu capacidad de análisis y actuación.</p>
                                                    <p>El nuevo contenido al que tendrás acceso comparará la información propia de tu negocio con los del sector, pudiendo filtrar tanto por código postal como por la fecha en la que se realizaron las transacciones.</p>
                                                    <p>Por último siendo cliente premium serás el primero en tener acceso a las nuevas mejoras y actualizaciones que se desarrollan en Inube.</p>
                                                </ModalBody>
                                                <ModalFooter>
                                                <Button color="danger" onClick={this.togglemodalPremium}>Me lo voy a pensar</Button>
                                                <Button color="success" onClick={this.bePremium}>Hazme Premium</Button>
                                                </ModalFooter>
                                                </Modal></p>}</div>
                                            {/*<strong>Tipo de Negocio: </strong> {this.props.business.businessType} <br/>
                                            <strong>Precio medio: </strong> {this.props.business.businessPrice}
                                        </Col>
                                        <Col md='2'>
                                            <Button onClick={() => this.editHandler()}> Editar </Button>*/}
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
                    <Collapse isOpen={true}>
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
