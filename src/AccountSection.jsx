import React from 'react';
import { Container, Col, Row, ListGroupItem, ListGroup, Form, FormGroup, Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap';
import NegocioSection from './NegocioSection.jsx';
import TPV from './TPV.jsx';

export default class AccountSecrtions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //section: 0,
            section: 1,
            addBusiness: false,
            alert: false,
            alertType: '',
            alertMessage: '',
        }
        this.toggleSection = this.toggleSection.bind(this);
        this.acceptChanges = this.acceptChanges.bind(this);
        this.addBusiness = this.addBusiness.bind(this);
        this.changeLoginInfo = this.changeLoginInfo.bind(this);
        this.addTPV = this.addTPV.bind(this);
        this.deleteTPV = this.deleteTPV.bind(this);
        this.getBusiness = this.getBusiness.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.onDismissAlert = this.onDismissAlert.bind(this);
        this.bePremium = this.bePremium.bind(this);
    }

    bePremium() {
        this.props.bePremium();
    }

    onDismissAlert() {
        this.props.onDismissAlert();
    }

    changePassword() {
        let newPassword = document.getElementById('passwordEdit').value;
        let newPasswordRepeat = document.getElementById('passwordRepeatEdit').value;
        let oldPassword = document.getElementById('actualPassword').value;
        document.getElementById('passwordRepeatEdit').value = '';
        document.getElementById('passwordEdit').value = '';
        document.getElementById('actualPassword').value = '';
        if ((newPassword.length === 0) || (newPasswordRepeat.length === 0) || (oldPassword.length === 0)) {
            this.setState({
                alert: !this.state.alert,
                alertType: 'danger',
                alertMessage: 'Debe rellenar todos los campos',
            });
        } else if (newPassword !== newPasswordRepeat) {
            this.setState({
                alert: !this.state.alert,
                alertType: 'danger',
                alertMessage: 'Las contraseñas no coinciden',
            });
        } else {
            this.props.changePassword(oldPassword, newPassword);
        }
    }

    getBusiness(sect) {
        this.props.getBusiness();
        this.setState({
            section: sect,
        });
    }

    deleteTPV(businessIndex, TPVindex) {
        this.props.deleteTPV(businessIndex, TPVindex);
    }

    addTPV(index, TPVdata) {
        this.props.addTPV(index, TPVdata);
    }

    changeLoginInfo() {
        let userName = document.getElementById('userNameEdit').value === '' ? this.props.userInfo.userName : document.getElementById('userNameEdit').value;
        let userEmail = document.getElementById('emailEdit').value === '' ? this.props.userInfo.userEmail : document.getElementById('emailEdit').value;
        console.log("Account Section: ", userName, userEmail);
        document.getElementById('userNameEdit').value = '';
        document.getElementById('emailEdit').value = '';
        this.props.changeLoginInfo(userName, userEmail);
    }

    toggleSection(sect) {
        this.setState({
            section: sect,
        });
    }
    
    acceptChanges(editData, index) {
        this.props.acceptBusinessChanges(editData, index);
    }

    addBusiness() {
        if (!this.state.addBusiness) {
            this.setState({
                addBusiness: !this.state.addBusiness,
            });
        } else {
            let restaurantName = document.getElementById('restaurantName').value;
            let restaurantZipCode = document.getElementById('zipCode').value;
            let restaurantType = document.getElementById('businessType').value;
            let restauranAverageSell = document.getElementById('averageSell').value;
            if (restaurantName === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertMessage: 'El nombre del restaurante no puede estar vacío',
                });
            } else if ((restaurantZipCode === '') || (restaurantZipCode.length !== 5)) {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertMessage: 'El formato del código postal no es válido',
                });
            } else if (restaurantType === 'Eliga una opción') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertMessage: 'Eliga una opción',
                });
            } else if (restauranAverageSell === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertMessage: 'El precio medio del menú no puede estar vacío',
                });
            } else {
                this.props.addBusiness([restaurantName, restaurantZipCode, restaurantType, restauranAverageSell]);
                this.setState({
                    addBusiness: !this.state.addBusiness,
                });
            }
        }
    }

    render() {
        let alert = <Alert color={this.state.alertType} isOpen={this.state.alert} toggle={() => {this.setState({alert: !this.state.alert})}} style={{width: '100%', height: '50px'}}> {this.state.alertMessage}</Alert>;
        let alertBack = <Alert color={this.props.alertType} isOpen={this.props.alert} toggle={() => {this.props.onDismissAlert()}} style={{width: '100%', height: '50px'}}> {this.props.alertMessage}</Alert>;
        let negocios = <NegocioSection bePremium={this.bePremium} userInfo={this.props.userInfo} acceptChanges={this.acceptChanges}/>;
        //let tpvs = this.props.userInfo.business.map((business, index) => <TPV key={index} tpvs={business.tpvs} businessName={business.businessName} index={index} addTPV={this.addTPV} deleteTPV={this.deleteTPV}/>);
        let editSection = <div></div>;
        if (this.state.section === 0) {
            editSection = <div>
                <div>
                    {alertBack}
                </div>
                <Form>
                    <FormGroup row>
                        <Label for="userNameEdit" sm={9}>Nombre de usuario</Label>
                        <Col sm={12}>
                            <Input type="emailEdit" id="userNameEdit" placeholder={this.props.userInfo.userName}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="emailEdit" sm={5}>Email</Label>
                        <Col sm={12}>
                            <Input type="email" id="emailEdit" placeholder={this.props.userInfo.userEmail}/>
                        </Col>
                    </FormGroup>
                    <FormGroup check row style={{display: 'flex', justifyContent: 'center'}}>
                        <Col sm={{ size: 10, offset: 7 }}>
                            <Button style={{margin: '5px'}} onClick={this.changeLoginInfo}>Modificar</Button> 
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        } else if (this.state.section === 1) {
            editSection = <div>
                <div>
                    {alertBack}
                </div>
                <Form>
                    <FormGroup row>
                        <Label for="passwordEdit" sm={5}>Contraseña actual</Label>
                        <Col sm={12}>
                            <Input type="password" id="actualPassword"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="passwordEdit" sm={5}>Nueva contraseña</Label>
                        <Col sm={12}>
                            <Input type="password" id="passwordEdit"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="passwordEdit" sm={9}>Repita su contraseña</Label>
                        <Col sm={12}>
                            <Input type="password" id="passwordRepeatEdit"/>
                        </Col>
                    </FormGroup>
                    <FormGroup check row style={{display: 'flex', justifyContent: 'center'}}>
                        <Col sm={{ size: 10, offset: 7 }}>
                            <Button style={{margin: '5px'}} onClick={this.changePassword}>Modificar</Button> 
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        } else if (this.state.section === 2) {
            editSection = <div>
                <div>
                    {alertBack}
                </div>
                {/*<Row><Button style={{marginLeft: '3px'}} onClick={() => this.addBusiness()}>Añadir negocio</Button></Row>*/}
                <Row>{negocios}</Row>
                {/*<Row>
                    <Modal isOpen={this.state.addBusiness} toggle={() => {this.setState({addBusiness: !this.state.addBusiness})}}>
                        <ModalHeader toggle={() => {this.setState({addBusiness: !this.state.addBusiness})}}> Nuevo negocio </ModalHeader>
                        <ModalBody>
                            {alert}
                            <Form>
                                <FormGroup row>
                                    <Label for="restaurantName" sm={9}>Nombre del negocio</Label>
                                    <Col sm={12}>
                                        <Input type="email" id="restaurantName"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="zipCode" sm={5}>Código Postal</Label>
                                    <Col sm={12}>
                                        <Input type="email" id="zipCode"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="businessType" sm={12}>Elija la opción que mejor define su negocio</Label>
                                    <Col sm={12}>
                                        <Input type="select" name="select" id="businessType">
                                            <option>Eliga una opción</option>
                                            <option>Restaurante</option>
                                            <option>Cafetería</option>
                                            <option>Bar</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="averageSell" sm={9}>Precio medio del menú</Label>
                                    <Col sm={12}>
                                        <Input type="averageSell" id="averageSell" placeholder='CuentaMediaRegistro'/>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={() => {this.addBusiness()}}> Aceptar </Button>
                        </ModalFooter>
                    </Modal>
                </Row>*/}
             </div>
        } else if (this.state.section === 3) {
            editSection = <div>
                <div>
                    {alertBack}
                </div>
                <Row>{tpvs}</Row>
            </div>
        }
        return (
            <div>
                <Container style={{marginLeft: '0px', marginRight: '0px', marginTop: '15px'}}>
                    <Row>
                        <Col md='3'>
                            <div>
                                <ListGroup>
                                    {/*<ListGroupItem active={ this.state.section === 0 } tag="button" action onClick={() => this.toggleSection(0)}>Perfil de usuario</ListGroupItem>*/}
                                    <ListGroupItem color="info" active={ this.state.section === 1 } tag="button" action onClick={() => this.toggleSection(1)}>Contraseña</ListGroupItem>
                                    <ListGroupItem color="info" active={ this.state.section === 2 } tag="button" action onClick={() => this.getBusiness(2)}>Mi Cuenta</ListGroupItem>
                                    {/*<ListGroupItem active={ this.state.section === 3 } tag="button" action onClick={() => this.getBusiness(3)}>Mis TPVs</ListGroupItem>*/}
                                </ListGroup>
                            </div>
                        </Col>
                        <Col md='9'>
                            <div>
                                {editSection}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}