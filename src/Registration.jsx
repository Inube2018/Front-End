import React from 'react';
import { Form, FormGroup, Button, Col, Label, Input, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alert: false,
            alertType: '',
            alertText: '',
            modal: false
        }
        this.registrationHandler = this.registrationHandler.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        this.stepBackHandler = this.stepBackHandler.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    registrationHandler() {
        //let userName = document.getElementById('userName').value;
        //let email = document.getElementById('emailReg').value;
        let mid = document.getElementById('userMid').value;
        let password = document.getElementById('passwordReg').value;
        let passwordRepeat = document.getElementById('passwordRepeat').value;
        /*if (userName === '') {
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
            });*/
        if (mid === '') {
            this.setState({
                alert: !this.state.alert,
                alertType: 'danger',
                alertText: 'Debe introducir un MID',
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
        } else if (!document.getElementById('checkbox').checked) {
            this.setState({
                alert: !this.state.alert,
                alertType: 'danger',
                alertText: 'Debe aceptar las condiciones de uso',
            });
        } else {
            //let regData = [userName, email, password];
            //document.getElementById('userName').value = '';
            //document.getElementById('emailReg').value = '';
            let regData = [mid, password];
            //document.getElementById('userMid').value = '';
            //document.getElementById('passwordReg').value = '';
            //document.getElementById('passwordRepeat').value = '';
            this.props.registrationHandler(0, regData);
        }
    }

    stepBackHandler() {
        this.props.registrationHandler(1, []);
    }

    onDismiss(){
        this.setState({
            alert: false,
        });
    }

    render() {
        let alert = <Alert color={this.state.alertType} isOpen={this.state.alert} toggle={this.onDismiss} style={{width: '100%', height: '50px'}}>{this.state.alertText}</Alert>;
        let alertBack = <Alert color={this.props.alertType} isOpen={this.props.alert} toggle={() => {this.props.onDismissAlert()}} style={{width: '100%', height: '50px'}}> {this.props.alertMessage}</Alert>;
        return (
            <div style={{height: '90%', width: '90%', display: 'flex', justifyContent: 'center', margin: '5%', marginTop: '1%', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{width: '40%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <h3 style={{display: 'flex', justifyContent: 'center', marginBottom: '15px'}}>Registro</h3>
                    {alert}
                    {alertBack}
                </div>
                <Form>
                    {/*<FormGroup row>
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
                    </FormGroup>*/}
                    <FormGroup row>
                        <Label for="mid" sm={9}>MID</Label>
                        <Col sm={12}>
                            <Input type="text" id="userMid"/>
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
                    <FormGroup row>
                        <Col sm={12}>
                            <Input style={{marginTop: '13px'}} type="checkbox" id="checkbox" onClick={() => {if (document.getElementById('checkbox').value === 'on') {document.getElementById('checkbox').value = 'off'} else {document.getElementById('checkbox').value = 'on'}}}/>{' '}Acepto las<Button className='pop-up' style={{paddingTop: '8px', paddingLeft: '4px', paddingRight: '4px'}} onClick={this.toggle}> condiciones de uso</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className='legal'>
                                <ModalHeader toggle={this.toggle}> Política de Privacidad</ModalHeader>
                                <ModalBody>

                                    <p className='text-center'>USO DE DATOS</p>

                                    <p>Los Datos de Carácter Personal, recogidos en la web de INUBE y que voluntariamente se faciliten en el proceso de
                                        Registro de usuarios son objeto de tratamiento automatizado, con un único uso exclusivo identificativo.
                                        Los datos recopilados en el registro únicamente se destinan a los fines descritos en el formulario correspondiente
                                        de recopilación de datos y nunca, en ningún caso, serán cedidos a terceros sin el consentimiento expreso previo de sus titulares.
                                        La recogida y tratamiento automatizado de los posibles Datos de Carácter Personal tiene como finalidad de  habilitarle para
                                        el uso de la applicación de analisis financiero y de competencia INUBE.
                                        El registro como usuario requiere de un nombre de usuario, que puede coincidir o no con sus datos personales, y de una
                                        dirección de correo electrónico válida. El usuario garantiza la autenticidad y veracidad de todos aquellos datos que comunique
                                        a través de la Web y deberá mantener actualizada la información que facilite a INUBE, de forma que responda en todo momento a
                                        su situación real, siendo el único responsable de las manifestaciones falsas o inexactas que realice, así como de los
                                        perjuicios que cause por ello a INUBE o a terceros.
                                        El Usuario garantiza que es mayor de 18 años y será enteramente responsable de esta declaración y del acceso y correcto uso
                                        de INUBE con sujeción a estas condiciones y a la legalidad vigente, sea nacional o internacional, así como a los principios
                                        de buena fe, a la moral y al orden público, y con el compromiso de observar diligentemente cualquier instrucción adicional
                                        que, en relación con dicho uso y acceso, pudiera serle impartida por INUBE.
                                        Salvo lo expuesto en nuestra Política de Cookies, INUBE no recoge ningún dato personal de los usuarios durante la visita o
                                        navegación en la Web.
                                        El Usuario podrá ser requerido por INUBE, en cualquier momento, para que autentifique su edad mediante la aportación de la
                                        fotocopia de su DNI o documento equivalente. La falta de suministro de esta información por parte del Usuario en el plazo que
                                        le sea indicado por INUBE dará derecho a este último a suspender o cancelar el perfil del Usuario, dado que es requisito
                                        indispensable ser mayor de edad.
                                        En el caso de que existiese cualquier abuso o vulneración de las presentes condiciones deberá ser reportada inmediatamente a INUBE.</p>
                                    <p className='text-center'> VERACIDAD DE LOS DATOS</p>

                                    <p>Al facilitar su información personal a INUBE y darse de alta como usuario registrado y/o usar los servicios INUBE, el usuario acepta
                                        el uso de su información personal para los usos descritos en la presente Política de Privacidad, incluyendo el almacenamiento de
                                        sus datos de usuario.</p>

                                    <p className='text-center'> DERECHOS DE LOS USUARIOS</p>

                                    <p>El usuario puede ejercer sus derechos de acceso, rectificación, cancelación y oposición previstos en la Ley Orgánica de Protección de Datos,
                                        mediante una comunicación escrita dirigida a 3DGAMES, con domicilio en C/ Alonso Quijano Nº45, Madrid, España; o bien mediante correo
                                        electrónico dirigido a inube@gmail.com</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="success" onClick={this.toggle}>Estoy de Acuerdo</Button>
                                </ModalFooter>
                            </Modal>de iNube
                        </Col>
                    </FormGroup>
                    <FormGroup check row style={{display: 'flex', justifyContent: 'center'}}>
                        <Col sm={{ size: 10, offset: 5 }}>
                            <Button onClick={this.registrationHandler}>Aceptar</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default Registration;
