import React from 'react';
import { Form, FormGroup, Button, Label, Input, Alert, Row, Col } from 'reactstrap';


class EditAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alert: false,
            alertType: '',
            alertText: '',
        }
        this.onDismiss = this.onDismiss.bind(this);
        this.stepEditHandler = this.stepEditHandler.bind(this);
        this.stepEditBackHandler = this.stepEditBackHandler.bind(this);
    }

    stepEditHandler(){
        if (this.props.editStep === 0) {
            let userNameEdit = document.getElementById('userNameEdit').value;
            let emailEdit = document.getElementById('emailEdit').value;
            let passwordEdit = document.getElementById('passwordEdit').value;
            let passwordRepeatEdit = document.getElementById('passwordRepeatEdit').value;
            if (userNameEdit === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El nombre de usuario no puede estar vacío',
                });
            } else if (emailEdit === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El email no puede estar vacío',
                });
            } else if (passwordEdit === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'La contraseña no puede estar vacía',
                });
            } else if (passwordEdit !== passwordRepeatEdit) {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'La contraseña y su repetición no coinciden',
                });
            } else {
                let editData = [userNameEdit, emailEdit, passwordEdit];
                document.getElementById('userNameEdit').value = '';
                document.getElementById('emailEdit').value = '';
                document.getElementById('passwordEdit').value = '';
                document.getElementById('passwordRepeatEdit').value = '';
                console.log(this.props);
                this.props.stepEditHandler(0, editData);
            }
        } else if (this.props.editStep === 1) {
            let restaurantNameEdit = document.getElementById('restaurantNameEdit').value;
            let zipCodeEdit = document.getElementById('zipCodeEdit').value;
            let businessTypeEdit = document.getElementById('businessTypeEdit').value;
            let averageSellEdit = document.getElementById('averageSellEdit').value;
            if (restaurantNameEdit === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El nombre del negocio no puede estar vacío',
                });
            } else if ((zipCodeEdit === '') || (zipCodeEdit.length !== 5)) {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El formato del código postal no es válido',
                });
            } else if (businessTypeEdit === 'Eliga una opción') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'Eliga una opción válida como tipo de negocio',
                });
            } else if (averageSellEdit === '') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El precio medio del menú no puede estar vacío',
                });
            } else {
                let editData = [restaurantNameEdit, zipCodeEdit, businessTypeEdit, averageSellEdit];
                document.getElementById('restaurantNameEdit').value = '';
                document.getElementById('zipCodeEdit').value = '';
                document.getElementById('businessTypeEdit').value = '';
                document.getElementById('averageSellEdit').value = '';
                this.props.stepEditHandler(0, editData);
            }
        } else if (this.props.editStep === 2) {
            console.log("Step 3");
            let ibanEdit = document.getElementById('ibanEdit').value;
            let checkboxEdit = document.getElementById('checkboxEdit').value;
            console.log(checkboxEdit);
            if ((ibanEdit.length !== 24) || ((ibanEdit[0] !== 'E') && (ibanEdit[1] !== 'S')) || (ibanEdit === '')) {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'El formato del IBAN no es válido. Sólo se aceptan IBAN españoles'
                });
            } else if (checkboxEdit === 'on') {
                this.setState({
                    alert: !this.state.alert,
                    alertType: 'danger',
                    alertText: 'Debe aceptar las condiciones de uso para registrarse',
                });
            } else {
                let editData = [ibanEdit];
                document.getElementById('ibanEdit').value = '';
                this.props.stepEditHandler(0, editData);
            }
        }
    }
    

    stepEditBackHandler() {
        this.props.stepEditHandler(1, []);
    }

    onDismiss(){
        this.setState({
            alert: false,
        });
    }

    render() {
        let alert = <Alert color={this.state.alertType} isOpen={this.state.alert} toggle={this.onDismiss} style={{width: '100%', height: '50px'}}>{this.state.alertText}</Alert>;
        if (this.props.editStep === 0) {            
            return (
                <div style={{height: '90%', width: '90%', display: 'flex', justifyContent: 'center', margin: '5%', marginTop: '1%', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{width: '40%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <h3 style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>Paso 1: Información de Log In</h3>
                        {alert}
                    </div>
                    <Form>
                        <FormGroup row>
                            <Label for="userNameEdit" sm={9}>Nombre de usuario</Label>
                            <Col sm={12}>
                                <Input type="emailEdit" id="userNameEdit"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="emailEdit" sm={5}>Email</Label>
                            <Col sm={12}>
                                <Input type="email" id="emailEdit" placeholder="example@email.com"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="passwordEdit" sm={5}>Contraseña</Label>
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
                            <Col sm={{ size: 10, offset: 5 }}>
                                <Button onClick={this.stepEditHandler}>Siguiente</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            );
        } else if (this.props.editStep === 1) {
            return(
                <div style={{height: '90%', width: '90%', display: 'flex', justifyContent: 'center', margin: '5%', marginTop: '1%', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{width: '40%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <h3 style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>Paso 2: Información de su Negocio</h3>
                        {alert}
                    </div>
                    <Form>
                        <FormGroup row>
                            <Label for="restaurantNameEdit" sm={9}>Nombre del negocio</Label>
                            <Col sm={12}>
                                <Input type="email" id="restaurantNameEdit" placeholder=''/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="zipCodeEdit" sm={5}>Código Postal</Label>
                            <Col sm={12}>
                                <Input type="email" id="zipCodeEdit" placeholder=''/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="businessTypeEdit" sm={12}>Eliga la opción que mejor define su negocio</Label>
                            <Col sm={12}>
                                <Input type="select" name="select" id="businessTypeEdit">
                                    <option>Eliga una opción</option>
                                    <option>Restaurante</option>
                                    <option>Cafetería</option>
                                    <option>Bar</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="averageSellEdit" sm={9}>Precio medio del menú</Label>
                            <Col sm={12}>
                                <Input type="averageSell" id="averageSellEdit" placeholder=''/>
                            </Col>
                        </FormGroup>
                        <FormGroup check row style={{display: 'flex', justifyContent: 'center'}}>
                            <Col sm={{ size: 11, offset: 5 }}>
                                <Button onClick={this.stepEditBackHandler} style={{margin: '5px'}}>Anterior</Button>
                                <Button onClick={this.stepEditHandler} style={{margin: '5px'}}>Siguiente</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            );
        } else if (this.props.editStep === 2) {
            return (
                <div style={{height: '90%', width: '90%', display: 'flex', justifyContent: 'center', margin: '5%', marginTop: '1%', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{width: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                        <h3 style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>Paso 3: Datos TPV</h3>
                        {alert}
                    </div>
                    <Form>
                        <FormGroup row>
                            <Label for="ibanEdit" sm={9}>IBAN</Label>
                            <Col sm={12}>
                                <Input type="email" id="ibanEdit"/>
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
                                    <Button onClick={this.stepEditBackHandler} style={{margin: '5px'}}>Anterior</Button>
                                    <Button onClick={this.stepEditHandler} style={{margin: '5px'}}>Registrarse</Button>
                                </div>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            );
        }
    }
}

export default EditAccount; 