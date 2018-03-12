import React from 'react';
import { Form, FormGroup, Button, Col, Label, Input, Alert } from 'reactstrap';

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alert: false,
            alertType: '',
            alertText: '',
        }
        this.stepHandler = this.stepHandler.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.stepBackHandler = this.stepBackHandler.bind(this);
    }

    stepHandler() {
        if (this.props.registrationStep === 0) {
            let userName = document.getElementById('userName').value;
            let email = document.getElementById('emailReg').value;
            let password = document.getElementById('passwordReg').value;
            let passwordRepeat = document.getElementById('passwordRepeat').value;
            if (userName === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El nombre de usuario no puede estar vacío',
                });
            } else if (email === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El email no puede estar vacío',
                });
            } else if (password === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'La contraseña no puede estar vacía',
                });
            } else if (password !== passwordRepeat) {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'La contraseña y su repetición no coinciden',
                });
            } else {
                let regData = [userName, email, password];
                document.getElementById('userName').value = '';
                document.getElementById('emailReg').value = '';
                document.getElementById('passwordReg').value = '';
                document.getElementById('passwordRepeat').value = '';
                this.props.stepHandler(0, regData);
            }
        } else if (this.props.registrationStep === 1) {
            let restaurantName = document.getElementById('restaurantName').value;
            let zipCode = document.getElementById('zipCode').value;
            let businessType = document.getElementById('businessType').value;
            let averageSell = document.getElementById('averageSell').value;
            if (restaurantName === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El nombre del negocio no puede estar vacío',
                });
            } else if ((zipCode === '') || (zipCode.length !== 5)) {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El formato del código postal no es válido',
                });
            } else if (businessType === 'Eliga una opción') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'Eliga una opción válida como tipo de negocio',
                });
            } else if (averageSell === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El precio medio del menú no puede estar vacío',
                });
            } else {
                let regData = [restaurantName, zipCode, businessType, averageSell];
                document.getElementById('restaurantName').value = '';
                document.getElementById('zipCode').value = '';
                document.getElementById('businessType').value = '';
                document.getElementById('averageSell').value = '';
                this.props.stepHandler(0, regData);
            }
        } else if (this.props.registrationStep === 2) {
            console.log("Step 3");
            let iban = document.getElementById('iban').value;
            let checkbox = document.getElementById('checkbox').value;
            console.log(checkbox);
            if ((iban.length !== 24) || ((iban[0] !== 'E') && (iban[1] !== 'S')) || (iban === '')) {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El formato del IBAN no es válido. Sólo se aceptan IBAN españoles'
                });
            } else if (checkbox === 'on') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'Debe aceptar las condiciones de uso para registrarse',
                });
            } else {
                let regData = [iban];
                document.getElementById('iban').value = '';
                this.props.stepHandler(0, regData);
            }
        }
    }

    stepBackHandler() {
        this.props.stepHandler(1, []);
    }

    onDismiss(){
        this.setState({
            alert: false,
        });
    }

    render() {
        let alert = <Alert color={this.state.alertType} isOpen={this.state.alert} toggle={this.onDismiss} style={{width: '100%', height: '50px'}}>{this.state.alertText}</Alert>;
        if (this.props.registrationStep === 0) {            
            return (
                <div style={{height: '90%', width: '90%', display: 'flex', justifyContent: 'center', margin: '5%', marginTop: '1%', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{width: '40%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <h3 style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>Paso 1: Información de Log In</h3>
                        {alert}
                    </div>
                    <Form>
                        <FormGroup row>
                            <Label for="userName" sm={9}>Nombre de usuario</Label>
                            <Col sm={12}>
                                <Input type="email" id="userName"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={5}>Email</Label>
                            <Col sm={12}>
                                <Input type="email" id="emailReg" placeholder="example@email.com"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={5}>Contraseña</Label>
                            <Col sm={12}>
                                <Input type="password" id="passwordReg"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={9}>Repita su contraseña</Label>
                            <Col sm={12}>
                                <Input type="password" id="passwordRepeat"/>
                            </Col>
                        </FormGroup>
                        <FormGroup check row style={{display: 'flex', justifyContent: 'center'}}>
                            <Col sm={{ size: 10, offset: 5 }}>
                                <Button onClick={this.stepHandler}>Siguiente</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            );
        } else if (this.props.registrationStep === 1) {
            return(
                <div style={{height: '90%', width: '90%', display: 'flex', justifyContent: 'center', margin: '5%', marginTop: '1%', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{width: '40%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <h3 style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>Paso 2: Información de su Negocio</h3>
                        {alert}
                    </div>
                    <Form>
                        <FormGroup row>
                            <Label for="restaurantName" sm={9}>Nombre del negocio</Label>
                            <Col sm={12}>
                                <Input type="email" id="restaurantName" placeholder=''/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="zipCode" sm={5}>Código Postal</Label>
                            <Col sm={12}>
                                <Input type="email" id="zipCode" placeholder=''/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="businessType" sm={12}>Eliga la opción que mejor define su negocio</Label>
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
                                <Input type="averageSell" id="averageSell" placeholder=''/>
                            </Col>
                        </FormGroup>
                        <FormGroup check row style={{display: 'flex', justifyContent: 'center'}}>
                            <Col sm={{ size: 11, offset: 5 }}>
                                <Button onClick={this.stepBackHandler} style={{margin: '5px'}}>Anterior</Button>
                                <Button onClick={this.stepHandler} style={{margin: '5px'}}>Siguiente</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            );
        } else if (this.props.registrationStep === 2) {
            return (
                <div style={{height: '90%', width: '90%', display: 'flex', justifyContent: 'center', margin: '5%', marginTop: '1%', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <h3 style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>Paso 3: Datos TPV</h3>
                        {alert}
                    </div>
                    <Form>
                        <FormGroup row>
                            <Label for="iban" sm={9}>IBAN</Label>
                            <Col sm={12}>
                                <Input type="email" id="iban"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col sm={12}>
                                <Input type="checkbox" id="checkbox" onClick={() => {if (document.getElementById('checkbox').value === 'on') {document.getElementById('checkbox').value = 'off'} else {document.getElementById('checkbox').value = 'on'}}}/>{' '}Acepto las condiciones de uso de iNube
                            </Col>
                        </FormGroup>
                        <FormGroup check row style={{display: 'flex', justifyContent: 'center'}}>
                            <Col sm={{ size: 12, offset: 0 }}>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <Button onClick={this.stepBackHandler} style={{margin: '5px'}}>Anterior</Button>
                                    <Button onClick={this.stepHandler} style={{margin: '5px'}}>Registrarse</Button>
                                </div>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            );
        }
    }
}
export default Registration; 
