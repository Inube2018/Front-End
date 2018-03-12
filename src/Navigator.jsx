import React from 'react';
import { Alert, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Home from './Home.jsx'
import Who from './Who.jsx'
import LogIn from './LogIn.jsx'
import Registration from './Registration.jsx'
import MetricsGraphics from 'react-metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';

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
                                    <MetricsGraphics
                                        title="Downloads"
                                        description="This graphic shows a time-series of downloads."
                                        data={ [{'date':new Date('2014-10-01'),'value':12}, {'date':new Date('2014-11-02'),'value':18}] }
                                        width={600}
                                        height={250}
                                        x_accessor="date"
                                        y_accessor="value"
                                    />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12" style={{display: 'flex', justifyContent: 'center'}}>
                                    <LogIn logInHandler={this.logInHandler}/>
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
                <h1>Has entrado</h1>
            </div>
        );
    }

    toggleTab(tab) {
        this.props.toggleTab(tab);
        console.log(this.props)
    }

    logInHandler(email, password) {
        this.props.logInHandler(email, password);
    }

    stepHandler(direction, regData) {
        this.props.stepHandler(direction, regData);
    }

}

export default Navigator;