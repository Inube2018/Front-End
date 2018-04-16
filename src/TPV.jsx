import React from 'react';
import { Collapse, CardBody, Card, Button, Col, Row, Container, Input, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label } from 'reactstrap';

export default class TPV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            addTPV: false,
            alert: false,
            alertType: '',
            alertMessage: '',
        };
        this.toggle = this.toggle.bind(this);
        this.addTPV = this.addTPV.bind(this);
        this.deleteTPV = this.deleteTPV.bind(this);
    }

    toggle() {
        this.setState({
            collapse: ! this.state.collapse,
        });
    }

    addTPV() {
        let idTPV = document.getElementById('idTPV').value;
        let ibanTPV = document.getElementById('ibanTPV').value;
        if (idTPV === '') {
            this.setState({
                alert: !this.state.alert,
                alertType: 'danger',
                alertMessage: 'El id del TPV no puede estar vacío'
            });
        } else if ((ibanTPV.length !== 24) && (ibanTPV[0] !== 'E') && (ibanTPV[1] !== 'S')) {
            this.setState({
                alert: !this.state.alert,
                alertType: 'danger',
                alertMessage: 'El formato de iban introducido no es válido'
            });
        } else {
            let TPVdata = [idTPV, ibanTPV];
            this.props.addTPV(this.props.index, TPVdata);
            this.setState({
                addTPV: !this.state.addTPV,
            });
        }
    }

    deleteTPV(businessIndex, TPVindex) {
        this.props.deleteTPV(businessIndex, TPVindex);
    }

    render() {
        let tpvs = this.props.tpvs.map((tpv, index) => <div key={index} style={{marginBottom: '5px'}}> <strong>TPV</strong><br/><strong style={{paddingLeft: '5px'}}>ID: </strong> {tpv.id} <br/><strong style={{paddingLeft: '5px'}}>IBAN: </strong> {tpv.iban} <br/> <Button style={{marginTop: '5px'}} color="danger" onClick={() => {this.deleteTPV(this.props.index, index)}}> Eliminar </Button> <br/><br/> </div>);
        return(
            <div style={{width: '100%', margin: '10px'}}>
                <Button style={{width: '100%', borderColor: 'grey', textAlign: 'left'}} color="white" onClick={this.toggle}> {this.props.businessName} </Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <Container>
                                <Row>
                                    <Col md='10'>
                                        {tpvs}
                                    </Col>
                                    <Col md='2'>
                                        <Button onClick={() => {this.setState({addTPV: !this.state.addTPV})}}> Añadir TPV </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </CardBody>
                    </Card>
                </Collapse>
                <Modal isOpen={this.state.addTPV} toggle={() => {this.setState({addTPV: !this.state.addTPV})}}>
                    <ModalHeader toggle={() => {this.setState({addTPV: !this.state.addTPV})}}> Nuevo TPV </ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Label for="idTPV" sm={9}>ID del TPV</Label>
                                    <Col sm={12}>
                                        <Input type="email" id="idTPV"/>
                                    </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="ibanTPV" sm={9}>IBAN asociado al TPV</Label>
                                    <Col sm={12}>
                                        <Input type="email" id="ibanTPV"/>
                                    </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.addTPV}>Aceptar</Button>
                    </ModalFooter>
                </Modal>        
            </div>
        )
    }
}