import React from 'react';
import { Alert, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import Home from './Home.jsx'
import Who from './Who.jsx'
import LogIn from './LogIn.jsx'
import Registration from './Registration.jsx'
import Dashboard from './Dashboard.jsx'
import EditAccount from './EditAccount.jsx'
import Faq from './Faq.jsx'


class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTab = this.toggleTab.bind(this);
        this.logInHandler = this.logInHandler.bind(this);
        this.stepHandler = this.stepHandler.bind(this);
        this.stepEditHandler = this.stepEditHandler.bind(this);
        this.stepEditSaltarHandler = this.stepEditSaltarHandler.bind(this);
        this.logOutHandler = this.logOutHandler.bind(this);
    }

    render() {
        if (!this.props.isLogged) {
            return (
                <div style={{paddingLeft: '5px'}}>
                    <Nav tabs>
                        <NavItem>
                            <NavLink onClick={() => {this.toggleTab('0');}} className={classnames({ active: this.props.activeTab === '0' })}>
                                Inicio
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {this.toggleTab('1');}} className={classnames({ active: this.props.activeTab === '1'})}>
                                Quiénes Somos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {this.toggleTab('2');}} className={classnames({ active: this.props.activeTab === '2'})}>
                                FAQ
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {this.toggleTab('3');}} className={classnames({ active: this.props.activeTab === '3'})}>
                                Entrar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => {this.toggleTab('4');}} className={classnames({ active: this.props.activeTab === '4'})}>
                                Registrarse
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.props.activeTab}>
                        <TabPane tabId="0">
                            <Row>
                                <Col md="12" >
                                    <Home/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <Who/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <Faq/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12" style={{display: 'flex', justifyContent: 'center'}}>
                                    <LogIn logInHandler={this.logInHandler} logInFailed={this.props.logInFailed}/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12">
                                    <Registration registrationStep={this.props.registrationStep} stepHandler={this.stepHandler}/>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            )
        }
        return(
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => {this.toggleTab('0');}} className={classnames({ active: this.props.activeTab === '0' })}>
                            Dashboard
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => {this.toggleTab('1');}} className={classnames({ active: this.props.activeTab === '1'})}>
                            Ajustes de mi Cuenta
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => {this.toggleTab('2');}} className={classnames({ active: this.props.activeTab === '2'})}>
                            Cerrar Sesión
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.props.activeTab}>
                    <TabPane tabId="0">
                        <Row>
                            <Col md="12" >
                                <Dashboard/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <EditAccount stepEditHandler={this.stepEditHandler} stepEditSaltarHandler = {this.stepEditSaltarHandler} editStep={this.props.editStep}/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                                    <Card body>
                                        <CardTitle>Cerrar sesión</CardTitle>
                                        <CardText>¿Seguro que quieres cerrar sesión?</CardText>
                                        <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'center'}}>
                                            <Button style={{width: '190px', margin: '10px'}} onClick={() => {this.logOutHandler(true)}}>Sí, cerrar sesión</Button><Button style={{width: '190px', margin: '10px'}} onClick={() => {this.logOutHandler(false)}}>No, seguir navegando</Button>
                                        </div>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }

    toggleTab(tab) {
        this.props.toggleTab(tab);
    }

    logInHandler(email, password) {
        this.props.logInHandler(email, password);
    }

    stepHandler(direction, regData) {
        this.props.stepHandler(direction, regData);
    }

    stepEditHandler(direction, editData) {
        this.props.stepEditHandler(direction, editData);
    }

    stepEditSaltarHandler(direction, editData2) {
        this.props.stepEditSaltarHandler(direction, editData2);
    }

    logOutHandler(logOut) {
        this.props.logOutHandler(logOut);
    }

}

export default Navigator;

