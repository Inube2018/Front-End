import React from 'react';
import { Container, Row, Col,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
var FontAwesome = require('react-fontawesome');

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
        };

        this.togglemodal1 = this.togglemodal1.bind(this);
        this.togglemodal2 = this.togglemodal2.bind(this);
    }

    togglemodal1() {
        this.setState({
            modal1: !this.state.modal1
        });
    }
    togglemodal2() {
        this.setState({
            modal2: !this.state.modal2
        });
    }

    render() {
        return (
            <div>
                <div id='phantom'></div>
                <Container fluid id='footer'>
                    <Row>
                        <Col md='6'>
                            <FontAwesome name='cloud' /> INUBE <FontAwesome name='copyright' />  Design with <FontAwesome name='heart' /> by group 02
                        </Col>
                        <Col md='6' className='text-right'>
                            <Row>
                                <Col md='6'/>
                                <Col md='3'><FontAwesome name='exclamation-triangle' /><Button className='pop-up' onClick={this.togglemodal1}> Aviso Legal</Button>
                                    <Modal isOpen={this.state.modal1} toggle={this.togglemodal1} className='legal'>
                                        <ModalHeader toggle={this.togglemodal1}> Política de Privacidad</ModalHeader>
                                        <ModalBody>

                                            <p className='text-center'>USO DE DATOS</p>

                                            <p>Los Datos de Carácter Personal, recogidos en la web de INUBE y que voluntariamente faciliten en el proceso de
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
                                            <Button color="success" onClick={this.togglemodal1}>Estoy de Acuerdo</Button>
                                        </ModalFooter>
                                    </Modal>
                                </Col>
                                <Col md='3'>
                                    <Button className='pop-up' onClick={this.togglemodal2}>
                                        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                                            <img alt="Licencia de Creative Commons"  src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                                        </a>
                                    </Button>
                                    <Modal isOpen={this.state.modal2} toggle={this.togglemodal2} className='license'>
                                        <ModalHeader toggle={this.togglemodal2}>Licencia</ModalHeader>
                                        <ModalBody>
                                            <div className='text-center'>
                                                <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                                                    <img alt="Licencia de Creative Commons"  src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
                                                </a>
                                                <br />
                                                <span href="http://purl.org/dc/dcmitype/Dataset" property="dct:title" >Inube - Un proyecto de ISST</span> by <a href="https://github.com/Inube2018/Front-End"  >Jaime Hurtado, Roberto Llop,  Marcos Luna, Cristina Sanchez y Paula Otero</a> is licensed under a <a  href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional License</a>.<br />Creado a partir de la obra en <a  href="https://github.com/Inube2018/Front-End" >https://github.com/Inube2018/Front-End</a>.
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="success" onClick={this.togglemodal2}>Estoy de Acuerdo</Button>
                                        </ModalFooter>
                                    </Modal>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        );

    }
}

