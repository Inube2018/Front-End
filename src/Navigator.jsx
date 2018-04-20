import React from 'react';
import { Alert, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import classnames from 'classnames';
import Home from './Home.jsx'
import Who from './Who.jsx'
import LogIn from './LogIn.jsx'
import Registration from './Registration.jsx'
import Dashboard from './Dashboard.jsx'
import Faq from './Faq.jsx'
import AccountSection from './AccountSection.jsx';


class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTab = this.toggleTab.bind(this);
        this.logInHandler = this.logInHandler.bind(this);
        this.registrationHandler = this.registrationHandler.bind(this);
        this.stepEditHandler = this.stepEditHandler.bind(this);
        this.stepEditSaltarHandler = this.stepEditSaltarHandler.bind(this);
        this.logOutHandler = this.logOutHandler.bind(this);
        this.acceptBusinessChanges = this.acceptBusinessChanges.bind(this);
        this.addBusiness = this.addBusiness.bind(this);
        this.changeLoginInfo = this.changeLoginInfo.bind(this);
        this.addTPV = this.addTPV.bind(this);
        this.deleteTPV = this.deleteTPV.bind(this);
        this.onDismissLogIn = this.onDismissLogIn.bind(this);
        this.getBusiness = this.getBusiness.bind(this);
    }

    getBusiness() {
        this.props.getBusiness();
    }

    onDismissLogIn() {
        this.props.onDismissLogIn();
    }

    deleteTPV(businessIndex, TPVindex) {
        this.props.deleteTPV(businessIndex, TPVindex);
    }

    addTPV(index, TPVdata) {
        this.props.addTPV(index, TPVdata);
    }

    addBusiness(business) {
        this.props.addBusiness(business);
    }

    acceptBusinessChanges(editData, index) {
        this.props.acceptBusinessChanges(editData, index);
    }

    changeLoginInfo(userName, userEmail) {
        console.log("Navigator: ", userName, userEmail);
        this.props.changeLoginInfo(userName, userEmail);
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
                                    <LogIn logInHandler={this.logInHandler} logInFailed={this.props.logInFailed} onDismissLogIn={this.onDismissLogIn}/>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12">
                                    <Registration registrationHandler={this.registrationHandler}/>
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
                                <AccountSection userInfo={this.props.userInfo} acceptBusinessChanges={this.acceptBusinessChanges} addBusiness={this.addBusiness} changeLoginInfo={this.changeLoginInfo} addTPV={this.addTPV} deleteTPV={this.deleteTPV} getBusiness={this.getBusiness}/>
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

    registrationHandler(direction, regData) {
        this.props.registrationHandler(direction, regData);
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

