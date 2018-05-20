import React from 'react';
import { Input, Button, Container, Row, Col, ListGroup, ListGroupItem, Label } from 'reactstrap';
//import Graphic from './Graphic.jsx';
//import GraphicTypes from './GraphicTypes.jsx';
import ReactChartkick, { ColumnChart, LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import Filter from './Filter.jsx';
import { runInThisContext } from 'vm';

ReactChartkick.addAdapter(Chart)

var FontAwesome = require('react-fontawesome');


export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            zip5: this.props.userInfo.business.businessZipCode,
            zip6: this.props.userInfo.business.businessZipCode,
            zip7: this.props.userInfo.business.businessZipCode,
            zip8: this.props.userInfo.business.businessZipCode,
            section: 0,
            dataPie1: {
                data1:
                {
                    'Enero 2018': 350
                ,
                    'Febrero 2018': 400
                ,
                    'Marzo 2018': 380
                ,
                    'Abril 2018': 420
                ,
                    'Mayo 2018': 450
                },
                data2: {
                    'Enero 2018': 350
                ,
                    'Febrero 2018': 400
                ,
                    'Marzo 2018': 380
                ,
                    'Abril 2018': 420
                ,
                    'Mayo 2018': 450
                }
            },
            data2: {},
            data1: {},
            data3: {},
            data4: {},
            data5: {},
            data6: {},
            data7: {},
            data8: {},
            dataAux: {},
        };
        this.toggleSection = this.toggleSection.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getData = this.getData.bind(this);
        this.bePremium = this.bePremium.bind(this);
    }

    bePremium() {
        this.props.bePremium();
    }

    onFilter(fechaDesde, fechaHasta) {

        let dataAux = this.state.dataAux;
        let newData = [];

        for (let i = 0; i < dataAux.length; i++) {

            var date = Date.parse(dataAux[i].date);

            if(fechaDesde < date && date < fechaHasta ){
                newData.push({'date': new Date(dataAux[i].date), 'value': dataAux[i].quantity});
            }
        }
        this.setState({
            data: newData,
        });
    }

    componentDidMount() {
        if (this.state.section == 0) {
            var req = new XMLHttpRequest();
            req.onreadystatechange = function() {
                if (req.readyState == 4 && req.status == 200) {
                    console.log(req.response);
                    let jsonResponse = JSON.parse(req.response);
                    this.setState({
                        data1: jsonResponse,
                    });
                }
            }.bind(this);
            req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic1Servlet', true);
            console.log(this.props.userInfo);
            req.setRequestHeader("mid", this.props.userInfo.userMid);
            req.send(null);
        }
    }

    getData(section) {
        console.log(section);
        let zip;
        switch (section) {
            case 5:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data5: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic6Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                zip = document.getElementById("zipCode5").value;
                document.getElementById("zipCode5").value = '';
                req.setRequestHeader("zip", zip);
                req.send(null);
                this.setState({
                    section: section,
                    zip5: zip,
                });
                break;
            case 6:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data6: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic7Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                zip = document.getElementById("zipCode6").value;
                document.getElementById("zipCode6").value = '';
                req.setRequestHeader("zip", zip);
                req.send(null);
                this.setState({
                    section: section,
                    zip6: zip,
                });
                break;
            case 7:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data7: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic8Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                zip = document.getElementById("zipCode7").value;
                document.getElementById("zipCode7").value = '';
                req.setRequestHeader("zip", zip);
                req.send(null);
                this.setState({
                    section: section,
                    zip7: zip,
                });
                break;
            case 8:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data8: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic9Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                zip = document.getElementById("zipCode8").value;
                document.getElementById("zipCode8").value = '';
                req.setRequestHeader("zip", zip);
                req.send(null);
                this.setState({
                    section: section,
                    zip8: zip,
                });
                break;
        }
    }

    toggleSection(section) {
        switch (section) {
            case 0:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data1: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic1Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                req.send(null);
                this.setState({
                    section: section,
                });
                break;
            case 1:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data2: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic2Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                req.send(null);
                this.setState({
                    section: section,
                });
                break;
            case 2:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data3: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic3Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                req.send(null);
                this.setState({
                    section: section,
                });
                break;
            case 3:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data4: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic4Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                req.send(null);
                this.setState({
                    section: section,
                });
                break;
            case 4:
                //Realizar petición de datosconsole.log("GRAPIC4");
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            dataPie1: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic5Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                req.send(null);
                this.setState({
                    section: section,
                });
                break;
            case 5:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data5: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic6Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                req.setRequestHeader("zip", this.props.userInfo.business.businessZipCode);
                req.send(null);
                this.setState({
                    section: section,
                });
                break;
            case 6:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data6: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic7Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                req.setRequestHeader("zip", this.props.userInfo.business.businessZipCode);
                req.send(null);
                this.setState({
                    section: section,
                });
                break;
            case 7:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data7: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic8Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                req.setRequestHeader("zip", this.props.userInfo.business.businessZipCode);
                req.send(null);
                this.setState({
                    section: section,
                });
                break;
            case 8:
                //Realizar petición de datos
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        console.log(req.response);
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            data8: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic9Servlet', true);
                console.log(this.props.userInfo);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                req.setRequestHeader("zip", this.props.userInfo.business.businessZipCode);
                req.send(null);
                this.setState({
                    section: section,
                });
                break;
        }
    }

    render() {
        let graphSection = <div></div>;
        if (this.state.section === 0) {
            graphSection = 
                <div>
                    <Col md="12">
                    <Label> Número de transacciones por mes </Label>
                    <ColumnChart data={this.state.data1} />
                    <Filter id={"graph1"} onFilter={this.onFilter}/>
                    </Col>
                </div>
        } else if (this.state.section === 1) {
            graphSection = 
                <div>
                    <Col md="12">
                    <Label> Número de transacciones por día </Label>
                    <LineChart data={this.state.data2} />
                    <Filter id={"graph2"} onFilter={this.onFilter}/>
                    </Col>
                </div>
        } else if (this.state.section === 2) {
            graphSection = 
                <div>
                    <Col md="12">
                    <Label> Ingresos por mes </Label>
                    <ColumnChart data={this.state.data3} />
                    <Filter id={"graph3"} onFilter={this.onFilter}/>
                    </Col>
                </div>
        } else if (this.state.section === 3) {
            graphSection = 
                <div>
                    <Col md="12">
                    <Label> Ingresos por día </Label>
                    <LineChart data={this.state.data4} />
                    <Filter id={"graph4"} onFilter={this.onFilter}/>
                    </Col>
                </div>
        } else if (this.state.section === 4) {
            graphSection = 
                <div>
                    <Col md="12">
                    <Label> Distribución por servicio de comida (Cantidad) </Label>
                    <PieChart data={this.state.dataPie1.data1} />
                    <br/>
                    <Label> Distribución por servicio de comida (Ingresos) </Label>
                    <PieChart data={this.state.dataPie1.data2} />
                    </Col>
                </div>
        } else if (this.state.section === 5) {
            if (this.props.userInfo.isPremium) {
                graphSection = 
                    <div>
                        <Label> Comparativa número de transacciones por mes </Label>
                        <Row>
                            <Col md="9">
                                <ColumnChart data={this.state.data5} />
                                <Filter id={"graph6"} onFilter={this.onFilter}/>
                            </Col>
                            <Col md="3">
                                <Label>Código postal</Label>
                                <Input type="text" placeholder={this.state.zip5} id="zipCode5"/>
                                <br/>
                                <Button color="info" onClick={() => {this.getData(5)}}> Actualizar gráfica </Button>
                            </Col>
                        </Row>
                        
                    </div>
            } else {
                graphSection = 
                    <div> 
                        <Col md="12">
                            <Label>Para ver esta gráfica hay que ser premium</Label>
                            <br/>
                            <Button onClick={this.bePremium} color="info">Quiero ser premium</Button>
                        </Col>
                    </div>
            }
        } else if (this.state.section === 6) {
            if (this.props.userInfo.isPremium) {
                graphSection = 
                <div>
                    <Label> Comparativa número de transacciones por día </Label>
                    <Row>
                        <Col md="9">
                            <LineChart data={this.state.data6} />
                            <Filter id={"graph7"} onFilter={this.onFilter}/>
                        </Col>
                        <Col md="3">
                            <Label>Código postal</Label>
                            <Input type="text" placeholder={this.state.zip6} id="zipCode6"/>
                            <br/>
                            <Button color="info" onClick={() => {this.getData(6)}}> Actualizar gráfica </Button>
                        </Col>
                    </Row>
                </div>
            } else {
                graphSection = 
                    <div> 
                        <Col md="12">
                            <Label>Para ver esta gráfica hay que ser premium</Label>
                            <br/>
                            <Button onClick={this.bePremium} color="info">Quiero ser premium</Button>
                        </Col>
                    </div>
            }
        } else if (this.state.section === 7) {
            if (this.props.userInfo.isPremium) {
                graphSection = 
                    <div>
                        <Label> Comparativa de ingresos por mes </Label>
                        <Row>
                            <Col md="9">
                                <ColumnChart data={this.state.data7} />
                                <Filter id={"graph8"} onFilter={this.onFilter}/>
                            </Col>
                            <Col md="3">
                                <Label>Código postal</Label>
                                <Input type="text" placeholder={this.state.zip7} id="zipCode7"/>
                                <br/>
                                <Button color="info" onClick={() => {this.getData(7)}}> Actualizar gráfica </Button>
                            </Col>
                        </Row>
                    </div>
            } else {
                graphSection = 
                    <div> 
                        <Col md="12">
                            <Label>Para ver esta gráfica hay que ser premium</Label>
                            <br/>
                            <Button onClick={this.bePremium} color="info">Quiero ser premium</Button>
                        </Col>
                    </div>
            }
        } else if (this.state.section === 8) {
            if (this.props.userInfo.isPremium) {
                graphSection = 
                    <div>
                        <Label> Comparativa de ingresos por día </Label>
                        <Row>
                            <Col md="9">
                                <LineChart data={this.state.data8} />
                                <Filter id={"graph9"} onFilter={this.onFilter}/>
                            </Col>
                            <Col md="3">
                                <Label>Código postal</Label>
                                <Input type="text" placeholder={this.state.zip8} id="zipCode8"/>
                                <br/>
                                <Button color="info" onClick={() => {this.getData(8)}}> Actualizar gráfica </Button>
                            </Col>
                        </Row>
                    </div>
            } else {
                graphSection = 
                    <div> 
                        <Col md="12">
                            <Label>Para ver esta gráfica hay que ser premium</Label>
                            <br/>
                            <Button onClick={this.bePremium} color="info">Quiero ser premium</Button>
                        </Col>
                    </div>
            }
        } 
        return (
            <div>
                <Container style={{marginLeft: '0px', marginRight: '0px', marginTop: '15px', marginBottom: '15px'}}>
                    <Row>
                        <Col md='3'>
                            <div overflow="scroll" marginBottom="20px">
                                <ListGroup>
                                    <ListGroupItem color="info" active={this.state.section === 0} tag="button" action onClick={() => this.toggleSection(0)}>Número de transacciones por mes</ListGroupItem>
                                    <ListGroupItem color="info" active={this.state.section === 1} tag="button" action onClick={() => this.toggleSection(1)}>Número de transacciones por día</ListGroupItem>
                                    <ListGroupItem color="info" active={this.state.section === 2} tag="button" action onClick={() => this.toggleSection(2)}>Ingresos por mes</ListGroupItem>
                                    <ListGroupItem color="info" active={this.state.section === 3} tag="button" action onClick={() => this.toggleSection(3)}>Ingresos por día</ListGroupItem>
                                    <ListGroupItem color="info" active={this.state.section === 4} tag="button" action onClick={() => this.toggleSection(4)}>Distribución por servicio de comida</ListGroupItem>
                                    <ListGroupItem color="warning" active={this.state.section === 5} tag="button" action onClick={() => this.toggleSection(5)}>Comparativa número de transacciones por mes</ListGroupItem>
                                    <ListGroupItem color="warning" active={this.state.section === 6} tag="button" action onClick={() => this.toggleSection(6)}>Comparativa número de transacciones por día</ListGroupItem>
                                    <ListGroupItem color="warning" active={this.state.section === 7} tag="button" action onClick={() => this.toggleSection(7)}>Comparativa de ingresos por mes</ListGroupItem>
                                    <ListGroupItem color="warning" active={this.state.section === 8} tag="button" action onClick={() => this.toggleSection(8)}>Comparativa de ingresos por día</ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col md ='9'>
                            <div>
                                {graphSection}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
        // return (
        //         <Container fluid className='dashboard' style={{marginTop: '1%', marginBottom: '2%'}}>
        //             <Row>
        //                 <Col md='2'>
        //                     <GraphicTypes />
        //                 </Col>
        //                 <Col md='10'>
        //                     <Row style={{marginBottom: '15px'}}>
        //                         <Col md='9'/>
        //                         <Col md='3'>
        //                             <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        //                                 <DropdownToggle caret color="warning">
        //                                     Configuración de dashboard
        //                                 </DropdownToggle>
        //                                 <DropdownMenu>
        //                                     <DropdownItem header>EN CONSTRUCCIÓN</DropdownItem>
        //                                     <DropdownItem>1</DropdownItem>
        //                                     <DropdownItem divider/>
        //                                     <DropdownItem>2</DropdownItem>
        //                                 </DropdownMenu>
        //                             </ButtonDropdown>
        //                         </Col>
        //                     </Row>
        //                     <Row>
        //                         <Col md='6'>
        //                             <Graphic id='grafico-1' userInfo={this.props.userInfo}/>
        //                         </Col>
        //                         <Col md='6'>
        //                             <Graphic id='grafico-2' userInfo={this.props.userInfo}/>
        //                         </Col>
        //                     </Row>
        //                     <Row>
        //                         <Col md='6'>
        //                             <Graphic id='grafico-3' userInfo={this.props.userInfo}/>
        //                         </Col>
        //                         <Col md='6'>
        //                             <Graphic id='grafico-4' userInfo={this.props.userInfo}/>
        //                         </Col>
        //                     </Row>
        //                 </Col>
        //             </Row>
        //         </Container>
        // );
    }
}

