import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Label } from 'reactstrap';
//import Graphic from './Graphic.jsx';
//import GraphicTypes from './GraphicTypes.jsx';
import ReactChartkick, { ColumnChart, LineChart, PieChart } from 'react-chartkick'
import Chart from 'chart.js'
import Filter from './Filter.jsx';

ReactChartkick.addAdapter(Chart)

var FontAwesome = require('react-fontawesome');


export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            section: 0,
            dataPie: 
                {
                    //'date': new Date(),
                    'Enero 2018': 350
                ,
                
                    //'date': new Date(),
                    'Febrero 2018': 400
                ,
                
                    //'date': new Date(),
                    'Marzo 2018': 380
                ,
                
                    //'date': new Date(),
                    'Abril 2018': 420
                ,
                
                    //'date': new Date(),
                    'Mayo 2018': 450
                }
            ,
            data: [
                    {
                        name: "Prueba1",
                        data: {
                            //'date': new Date(),
                            'Enero 2018': 350
                        ,
                        
                            //'date': new Date(),
                            'Febrero 2018': 400
                        ,
                        
                            //'date': new Date(),
                            'Marzo 2018': 380
                        ,
                        
                            //'date': new Date(),
                            'Abril 2018': 420
                        ,
                        
                            //'date': new Date(),
                            'Mayo 2018': 450
                        },
                        stack: "Prueba1",
                    },
                    {
                        name: "Prueba2",
                        data: {
                            //'date': new Date(),
                            'Enero 2018': 390
                        ,
                        
                            //'date': new Date(),
                            'Febrero 2018': 450
                        ,
                        
                            //'date': new Date(),
                            'Marzo 2018': 360
                        ,
                        
                            //'date': new Date(),
                            'Abril 2018': 400
                        ,
                        
                            //'date': new Date(),
                            'Mayo 2018': 420
                        },
                        stack: "Prueba2",
                    }
                ],
            dataAux: {},
            //dataAux: JSON.parse(req.response),
        };
        this.toggleSection = this.toggleSection.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
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
        var req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status == 200) {
                console.log(req.response);
                let jsonResponse = JSON.parse(req.response);
                this.setState({
                    data: jsonResponse,
                });
            }
        }.bind(this);
        req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic1Servlet', true);
        console.log(this.props.userInfo);
        req.setRequestHeader("mid", this.props.userInfo.userMid);
        req.send(null);
    }

    toggleSection(section) {
        switch (section) {
            case 0:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 1:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 2:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 3:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 4:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 5:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 6:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 7:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 8:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 9:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 10:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
            case 11:
                //Realizar petición de datos
                this.setState({
                    section: section,
                });
        }
    }

    render() {
        let graphSection = <div></div>;
        if (this.state.section === 0) {
            graphSection = 
                <div>
                    <Label> Número de transacciones por mes </Label>
                    <ColumnChart data={this.state.data} />
                    <Filter id={"graph1"} onFilter={this.onFilter}/>
                </div>
        } else if (this.state.section === 1) {
            graphSection = 
                <div>
                    <Label> Número de transacciones por día </Label>
                    <LineChart data={this.state.data} />
                    <Filter id={"graph2"} onFilter={this.onFilter}/>
                </div>
        } else if (this.state.section === 2) {
            graphSection = 
                <div>
                    <Label> Ingresos por mes </Label>
                    <ColumnChart data={this.state.data} />
                    <Filter id={"graph3"} onFilter={this.onFilter}/>
                </div>
        } else if (this.state.section === 3) {
            graphSection = 
                <div>
                    <Label> Ingresos por día </Label>
                    <LineChart data={this.state.data} />
                    <Filter id={"graph4"} onFilter={this.onFilter}/>
                </div>
        } else if (this.state.section === 4) {
            graphSection = 
                <div>
                    <Label> Distribución por servicio de comida </Label>
                    <PieChart data={this.state.dataPie} />
                    <Filter id={"graph5"} onFilter={this.onFilter}/>
                </div>
        } else if (this.state.section === 5) {
            graphSection = 
                <div>
                    <Label> Comparativa número de transacciones por mes </Label>
                    <ColumnChart data={this.state.data} />
                    <Filter id={"graph6"} onFilter={this.onFilter}/>
                </div>
        } else if (this.state.section === 6) {
            graphSection = 
                <div>
                    <Label> Comparativa número de transacciones por día </Label>
                    <LineChart data={this.state.data} />
                    <Filter id={"graph7"} onFilter={this.onFilter}/>
                </div>
        } else if (this.state.section === 7) {
            graphSection = 
                <div>
                    <Label> Comparativa de ingresos por mes </Label>
                    <ColumnChart data={this.state.data} />
                    <Filter id={"graph8"} onFilter={this.onFilter}/>
                </div>
        } else if (this.state.section === 8) {
            graphSection = 
                <div>
                    <Label> Comparativa de ingresos por día </Label>
                    <LineChart data={this.state.data} />
                    <Filter id={"graph9"} onFilter={this.onFilter}/>
                </div>
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

