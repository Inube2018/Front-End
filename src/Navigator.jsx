import React from 'react';
import { Alert, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Home from './Home.jsx'
import Who from './Who.jsx'
import LogIn from './LogIn.jsx'
import Registration from './Registration.jsx'
import Dashboard from './Dashboard.jsx'


class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTab = this.toggleTab.bind(this);
        this.logInHandler = this.logInHandler.bind(this);
        this.stepHandler = this.stepHandler.bind(this);
    }

    render() {
        if (!this.props.isLogged) {
            return (
                <div>
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
                                <Col sm="12" style={{padding: '20px', marginLeft: '20px'}}>
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
                                    <h4>Página de FAQ</h4>
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
                            <Col sm="12" style={{padding: '20px', marginLeft: '20px'}}>
                                <Dashboard/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <h4>Ajustes de mi cuenta</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <h4>Cerrar Sesión</h4>
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

}

export default Navigator;
