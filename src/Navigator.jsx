import React from 'react';
import { Alert, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';

class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTab = this.toggleTab.bind(this);
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
                                <Col sm="12">
                                    <h4>Página de inicio</h4>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <h4>Página de Quiénes Somos</h4>
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
                                <Col sm="12">
                                    <h4>Página de Log In</h4>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12">
                                    <h4>Página de registro</h4>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            )
        }
    }

    toggleTab(tab) {
        this.props.toggleTab(tab);
        console.log(this.props)
    }

}

export default Navigator;