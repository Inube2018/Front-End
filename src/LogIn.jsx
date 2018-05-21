import React from 'react';
import { Form, FormGroup, Button, Col, Label, Input, Alert } from 'reactstrap';

class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            alertType: 'danger',
            alertText: 'Usuario o contraseña incorrectos',
        }
        this.logInHandler = this.logInHandler.bind(this);
    }

    logInHandler() {
        console.log(this.props.logInFailed);
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        this.props.logInHandler(email, password);
    }

    render() {
        let alert = <Alert color={this.state.alertType} isOpen={this.props.logInFailed} toggle={() => {this.props.onDismissLogIn()}} style={{textAlign: 'center', width: '100%', height: '50px'}}>{this.state.alertText}</Alert>;
        return (
            <div style={{height: '200px', width: '50%', display: 'flex', justifyContent: 'center', margin: '5%', flexDirection: 'column'}}>
                <Form>
                    <h3 style={{display: 'flex', justifyContent: 'center'}}>Log In</h3>
                    {alert}
                    <FormGroup row>
                        <Label for="email" sm={5}>MID</Label>
                        <Col sm={12}>
                            <Input type="email" id="email" placeholder="MID"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={5}>Contraseña</Label>
                        <Col sm={12}>
                            <Input type="password" id="password"/>
                        </Col>
                    </FormGroup>
                    <FormGroup check row style={{display: 'flex', justifyContent: 'center'}}>
                        <Col sm={{ size: 10, offset: 8 }}>
                            <Button onClick={this.logInHandler}>Entrar</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default LogIn;
