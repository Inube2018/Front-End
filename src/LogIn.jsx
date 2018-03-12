import React from 'react';
import { Form, FormGroup, Button, Col, Label, Input } from 'reactstrap';

class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.logInHandler = this.logInHandler.bind(this);
    }

    logInHandler() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        this.props.logInHandler(email, password);
    }

    render() {
        return (
            <div style={{height: '200px', width: '50%', display: 'flex', justifyContent: 'center', margin: '5%'}}>
                <Form>
                    <h3 style={{display: 'flex', justifyContent: 'center'}}>Log In</h3>
                    <FormGroup row>
                        <Label for="email" sm={5}>Email</Label>
                        <Col sm={12}>
                            <Input type="email" id="email" placeholder="example@email.com"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={5}>Contraseña</Label>
                        <Col sm={12}>
                            <Input type="password" id="password"/>
                        </Col>
                    </FormGroup>
                    <FormGroup check row style={{display: 'flex', justifyContent: 'center'}}>
                        <Col sm={{ size: 10, offset: 5 }}>
                            <Button onClick={this.logInHandler}>Entrar</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default LogIn;
