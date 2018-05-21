import React from 'react';
import { Input, Button, Container, Row, Col, ListGroup, ListGroupItem, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
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
            modalPremium: false,
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
                },
                data2: {
                    'Enero 2018': 350
                ,
                    'Febrero 2018': 400
                ,
                    'Marzo 2018': 380
                ,
                    'Abril 2018': 420
                }
            },
            dataPie2: {
                data1:
                {
                    'Clientes habituales': 10,
                    'Clientes ocasionales': 50
                },
                data2:
                {
                    'Clientes habituales': 1000,
                    'Clientes ocasionales': 3000,
                },
            },
            data1: {
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
            dataAux1: {
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
                '01-01-2018': 10,
                '02-01-2018': 9,
                '03-01-2018': 13,
                '04-01-2018': 16,
                '05-01-2018': 13,
                '06-01-2018': 18,
                '07-01-2018': 13,
                '08-01-2018': 20,
                '09-01-2018': 12,
                '10-01-2018': 10,
                '11-01-2018': 18,
                '12-01-2018': 19,
                '13-01-2018': 20,
                '14-01-2018': 25,
                '15-01-2018': 27,
                '16-01-2018': 12,
                '17-01-2018': 11,
                '18-01-2018': 10,
                '19-01-2018': 7,
                '20-01-2018': 15,
                '21-01-2018': 18,
                '22-01-2018': 12,
                '23-01-2018': 19,
                '24-01-2018': 11,
                '25-01-2018': 14,
                '26-01-2018': 16,
                '27-01-2018': 11,
                '28-01-2018': 21,
                '29-01-2018': 14,
                '30-01-2018': 18,
                '31-01-2018': 11,
                '01-02-2018': 13,
                '02-02-2018': 17,
                '03-02-2018': 11,
                '04-02-2018': 17,
                '05-02-2018': 14,
                '06-02-2018': 18,
                '07-02-2018': 15,
                '08-02-2018': 19,
                '09-02-2018': 30,
                '10-02-2018': 6,
                '11-02-2018': 35,
                '12-02-2018': 14,
                '13-02-2018': 18,
                '14-02-2018': 12,
                '15-02-2018': 11,
                '16-02-2018': 19,
                '17-02-2018': 10,
                '18-02-2018': 5,
                '19-02-2018': 16,
                '20-02-2018': 18,
                '21-02-2018': 14,
                '22-02-2018': 16,
                '23-02-2018': 15,
                '24-02-2018': 12,
                '25-02-2018': 19,
                '26-02-2018': 15,
                '27-02-2018': 14,
                '28-02-2018': 17,
                '01-03-2018': 13,
                '02-03-2018': 12,
                '03-03-2018': 11,
                '04-03-2018': 17,
                '05-03-2018': 14,
                '06-03-2018': 13,
                '07-03-2018': 15,
                '08-03-2018': 19,
                '09-03-2018': 12,
                '10-03-2018': 17,
                '11-03-2018': 18,
                '12-03-2018': 13,
                '13-03-2018': 20,
                '14-03-2018': 23,
                '15-03-2018': 24,
                '16-03-2018': 25,
                '17-03-2018': 28,
                '18-03-2018': 22,
                '19-03-2018': 23,
                '20-03-2018': 21,
                '21-03-2018': 20,
                '22-03-2018': 23,
                '23-03-2018': 10,
                '24-03-2018': 22,
                '25-03-2018': 17,
                '26-03-2018': 8,
                '27-03-2018': 27,
                '28-03-2018': 23,
                '29-03-2018': 26,
                '30-03-2018': 28,
                '31-03-2018': 29,
                '01-04-2018': 22,
                '02-04-2018': 23,
                '03-04-2018': 27,
                '04-04-2018': 21,
                '05-04-2018': 20,
                '06-04-2018': 10,
                '07-04-2018': 10,
                '08-04-2018': 10,
                '09-04-2018': 14,
                '10-04-2018': 10,
                '11-04-2018': 15,
                '12-04-2018': 10,
                '13-04-2018': 18,
                '14-04-2018': 19,
                '15-04-2018': 13,
                '16-04-2018': 14,
                '17-04-2018': 17,
                '18-04-2018': 10,
                '19-04-2018': 19,
                '20-04-2018': 23,
                '21-04-2018': 10,
                '22-04-2018': 16,
                '23-04-2018': 10,
                '24-04-2018': 18,
                '25-04-2018': 10,
                '26-04-2018': 14,
                '27-04-2018': 16,
                '28-04-2018': 15,
                '29-04-2018': 12,
                '30-04-2018': 11,
                '01-05-2018': 18,
                '02-05-2018': 15,
                '03-05-2018': 19,
                '04-05-2018': 16,
                '05-05-2018': 14,
                '06-05-2018': 13,
                '07-05-2018': 18,
                '08-05-2018': 19,
                '09-05-2018': 20,
                '10-05-2018': 14,
                '11-05-2018': 13,
                '12-05-2018': 12,
                '13-05-2018': 11,
                '14-05-2018': 10,
                '15-05-2018': 18,
                '16-05-2018': 15,
                '17-05-2018': 16,
                '18-05-2018': 17,
                '19-05-2018': 13,
                '20-05-2018': 10,
            },
            dataAux2: {
                '01-01-2018': 10,
                '02-01-2018': 9,
                '03-01-2018': 13,
                '04-01-2018': 16,
                '05-01-2018': 13,
                '06-01-2018': 18,
                '07-01-2018': 13,
                '08-01-2018': 20,
                '09-01-2018': 12,
                '10-01-2018': 10,
                '11-01-2018': 18,
                '12-01-2018': 19,
                '13-01-2018': 20,
                '14-01-2018': 25,
                '15-01-2018': 27,
                '16-01-2018': 12,
                '17-01-2018': 11,
                '18-01-2018': 10,
                '19-01-2018': 7,
                '20-01-2018': 15,
                '21-01-2018': 18,
                '22-01-2018': 12,
                '23-01-2018': 19,
                '24-01-2018': 11,
                '25-01-2018': 14,
                '26-01-2018': 16,
                '27-01-2018': 11,
                '28-01-2018': 21,
                '29-01-2018': 14,
                '30-01-2018': 18,
                '31-01-2018': 11,
                '01-02-2018': 13,
                '02-02-2018': 17,
                '03-02-2018': 11,
                '04-02-2018': 17,
                '05-02-2018': 14,
                '06-02-2018': 18,
                '07-02-2018': 15,
                '08-02-2018': 19,
                '09-02-2018': 30,
                '10-02-2018': 6,
                '11-02-2018': 35,
                '12-02-2018': 14,
                '13-02-2018': 18,
                '14-02-2018': 12,
                '15-02-2018': 11,
                '16-02-2018': 19,
                '17-02-2018': 10,
                '18-02-2018': 5,
                '19-02-2018': 16,
                '20-02-2018': 18,
                '21-02-2018': 14,
                '22-02-2018': 16,
                '23-02-2018': 15,
                '24-02-2018': 12,
                '25-02-2018': 19,
                '26-02-2018': 15,
                '27-02-2018': 14,
                '28-02-2018': 17,
                '01-03-2018': 13,
                '02-03-2018': 12,
                '03-03-2018': 11,
                '04-03-2018': 17,
                '05-03-2018': 14,
                '06-03-2018': 13,
                '07-03-2018': 15,
                '08-03-2018': 19,
                '09-03-2018': 12,
                '10-03-2018': 17,
                '11-03-2018': 18,
                '12-03-2018': 13,
                '13-03-2018': 20,
                '14-03-2018': 23,
                '15-03-2018': 24,
                '16-03-2018': 25,
                '17-03-2018': 28,
                '18-03-2018': 22,
                '19-03-2018': 23,
                '20-03-2018': 21,
                '21-03-2018': 20,
                '22-03-2018': 23,
                '23-03-2018': 10,
                '24-03-2018': 22,
                '25-03-2018': 17,
                '26-03-2018': 8,
                '27-03-2018': 27,
                '28-03-2018': 23,
                '29-03-2018': 26,
                '30-03-2018': 28,
                '31-03-2018': 29,
                '01-04-2018': 22,
                '02-04-2018': 23,
                '03-04-2018': 27,
                '04-04-2018': 21,
                '05-04-2018': 20,
                '06-04-2018': 10,
                '07-04-2018': 10,
                '08-04-2018': 10,
                '09-04-2018': 14,
                '10-04-2018': 10,
                '11-04-2018': 15,
                '12-04-2018': 10,
                '13-04-2018': 18,
                '14-04-2018': 19,
                '15-04-2018': 13,
                '16-04-2018': 14,
                '17-04-2018': 17,
                '18-04-2018': 10,
                '19-04-2018': 19,
                '20-04-2018': 23,
                '21-04-2018': 10,
                '22-04-2018': 16,
                '23-04-2018': 10,
                '24-04-2018': 18,
                '25-04-2018': 10,
                '26-04-2018': 14,
                '27-04-2018': 16,
                '28-04-2018': 15,
                '29-04-2018': 12,
                '30-04-2018': 11,
                '01-05-2018': 18,
                '02-05-2018': 15,
                '03-05-2018': 19,
                '04-05-2018': 16,
                '05-05-2018': 14,
                '06-05-2018': 13,
                '07-05-2018': 18,
                '08-05-2018': 19,
                '09-05-2018': 20,
                '10-05-2018': 14,
                '11-05-2018': 13,
                '12-05-2018': 12,
                '13-05-2018': 11,
                '14-05-2018': 10,
                '15-05-2018': 18,
                '16-05-2018': 15,
                '17-05-2018': 16,
                '18-05-2018': 17,
                '19-05-2018': 13,
                '20-05-2018': 10,
            },
            data3: {},
            dataAux3: {},
            data4: {},
            dataAux4: {},
            data5: {},
            dataAux5: {},
            data6: {},
            dataAux6: {},
            data7: {},
            dataAux7: {},
            data8: {},
            dataAux8: {},
            dataAux: {},
        };
        this.toggleSection      = this.toggleSection.bind(this);
        this.onFilter           = this.onFilter.bind(this);
        this.componentDidMount  = this.componentDidMount.bind(this);
        this.getData            = this.getData.bind(this);
        this.bePremium          = this.bePremium.bind(this);
        this.togglemodalPremium = this.togglemodalPremium.bind(this);
    }
    togglemodalPremium() {
        this.setState({
            modalPremium: !this.state.modalPremium
        });
    }

    bePremium() {

        this.props.bePremium();
        this.setState({
            modalPremium: !this.state.modalPremium
        });
    }

    onFilter(fechaDesde, fechaHasta, graph) {
        console.log(graph);
        let dateDesde = new Date();
        let dateHasta = new Date();
        let monthDesde;
        let monthHasta;
        let newData = {};
        let auxDate;
        switch (graph) {
            case "graph1":
                let dataAux1 = this.state.dataAux1;
                dateDesde.setTime(fechaDesde);
                dateHasta.setTime(fechaHasta);
                monthDesde = dateDesde.getMonth()+1;
                monthHasta = dateHasta.getMonth()+1;
                newData = {};
                for (var key in dataAux1) {
                    switch (key.split(" ")[0]) {
                        case "Enero":
                            if ((monthDesde <= 1) && (monthHasta >= 1)) {
                                newData[key] = dataAux1[key];
                            }
                            break;
                        case "Febrero":
                            if ((monthDesde <= 2) && (monthHasta >= 2)) {
                                newData[key] = dataAux1[key];
                            }
                            break;
                        case "Marzo":
                            if ((monthDesde <= 3) && (monthHasta >= 3)) {
                                newData[key] = dataAux1[key];
                            }
                            break;
                        case "Abril":
                            if ((monthDesde <= 4) && (monthHasta >= 4)) {
                                newData[key] = dataAux1[key];
                            }
                            break;
                        case "Mayo":
                            if ((monthDesde <= 5) && (monthHasta >= 5)) {
                                newData[key] = dataAux1[key];
                            }
                            break;
                    }
                }
                this.setState({
                    data1: newData,
                });
                break;
            case "graph2":
                let dataAux2 = this.state.dataAux2;
                dateDesde.setTime(fechaDesde);
                dateHasta.setTime(fechaHasta);
                newData = {};
                auxDate = new Date();
                for (let key in dataAux2) {
                    auxDate.setDate(key.split("-")[0]);
                    auxDate.setMonth(key.split("-")[1]-1);
                    auxDate.setFullYear(key.split("-")[2]);
                    console.log((fechaDesde <= auxDate.getTime()) && (fechaHasta >= auxDate.getTime()));
                    if ((fechaDesde <= auxDate.getTime()) && (fechaHasta >= auxDate.getTime())) {
                        if ((dateDesde.getMonth() == dateHasta.getMonth()) && ((dateDesde.getDate() <= 12) && (dateHasta.getDate() <= 12))) {
                            var keyAux = key.split("-");
                            newData[keyAux[1]+"-"+keyAux[0]+"-"+keyAux[2]] = dataAux2[key];
                        } else {
                            newData[key] = dataAux2[key];
                        }
                    }
                }
                console.log(newData);
                this.setState({
                    data2: newData,
                });
                break;
            case "graph3":
                let dataAux3 = this.state.dataAux3;
                dateDesde.setTime(fechaDesde);
                dateHasta.setTime(fechaHasta);
                monthDesde = dateDesde.getMonth()+1;
                monthHasta = dateHasta.getMonth()+1;
                newData = {};
                for (var key in dataAux3) {
                    switch (key.split(" ")[0]) {
                        case "Enero":
                            if ((monthDesde <= 1) && (monthHasta >= 1)) {
                                newData[key] = dataAux3[key];
                            }
                            break;
                        case "Febrero":
                            if ((monthDesde <= 2) && (monthHasta >= 2)) {
                                newData[key] = dataAux3[key];
                            }
                            break;
                        case "Marzo":
                            if ((monthDesde <= 3) && (monthHasta >= 3)) {
                                newData[key] = dataAux3[key];
                            }
                            break;
                        case "Abril":
                            if ((monthDesde <= 4) && (monthHasta >= 4)) {
                                newData[key] = dataAux3[key];
                            }
                            break;
                        case "Mayo":
                            if ((monthDesde <= 5) && (monthHasta >= 5)) {
                                newData[key] = dataAux3[key];
                            }
                            break;
                    }
                }
                this.setState({
                    data3: newData,
                });
                break;
            case "graph4":
                let dataAux4 = this.state.dataAux4;
                dateDesde.setTime(fechaDesde);
                dateHasta.setTime(fechaHasta);
                newData = {};
                auxDate = new Date();
                for (let key in dataAux4) {
                    auxDate.setDate(key.split("-")[0]);
                    auxDate.setMonth(key.split("-")[1]-1);
                    auxDate.setFullYear(key.split("-")[2]);
                    if ((fechaDesde <= auxDate.getTime()) && (fechaHasta >= auxDate.getTime())) {
                        if ((dateDesde.getMonth() == dateHasta.getMonth()) && ((dateDesde.getDate() <= 12) && (dateHasta.getDate() <= 12))) {
                            var keyAux = key.split("-");
                            newData[keyAux[1]+"-"+keyAux[0]+"-"+keyAux[2]] = dataAux4[key];
                        } else {
                            newData[key] = dataAux4[key];
                        }
                    }
                }
                console.log(newData);
                this.setState({
                    data4: newData,
                });
                break;
            case "graph5":
                //let dataAux5 = this.state.dataAux5;
                console.log("graph5");
                break;
            case "graph6":
                let dataAux5 = this.state.dataAux5;
                dateDesde.setTime(fechaDesde);
                dateHasta.setTime(fechaHasta);
                monthDesde = dateDesde.getMonth()+1;
                monthHasta = dateHasta.getMonth()+1;
                newData = [{
                        'name': 'Propio',
                        'stack': 'Propio',
                        'data': {},
                    },
                    {
                        'name': 'Sector',
                        'stack': 'Sector',
                        'data': {},
                    }
                ];
                for (var key in dataAux5[0].data) {
                    switch (key.split(" ")[0]) {
                        case "Enero":
                            if ((monthDesde <= 1) && (monthHasta >= 1)) {
                                newData[0].data[key] = dataAux5[0].data[key];
                                newData[1].data[key] = dataAux5[1].data[key];
                            }
                            break;
                        case "Febrero":
                            if ((monthDesde <= 2) && (monthHasta >= 2)) {
                                newData[0].data[key] = dataAux5[0].data[key];
                                newData[1].data[key] = dataAux5[1].data[key];
                            }
                            break;
                        case "Marzo":
                            if ((monthDesde <= 3) && (monthHasta >= 3)) {
                                newData[0].data[key] = dataAux5[0].data[key];
                                newData[1].data[key] = dataAux5[1].data[key];
                            }
                            break;
                        case "Abril":
                            if ((monthDesde <= 4) && (monthHasta >= 4)) {
                                newData[0].data[key] = dataAux5[0].data[key];
                                newData[1].data[key] = dataAux5[1].data[key];
                            }
                            break;
                        case "Mayo":
                            if ((monthDesde <= 5) && (monthHasta >= 5)) {
                                newData[0].data[key] = dataAux5[0].data[key];
                                newData[1].data[key] = dataAux5[1].data[key];
                            }
                            break;
                    }
                }
                this.setState({
                    data5: newData,
                });
                break;
            case "graph7":
                let dataAux6 = this.state.dataAux6;
                dateDesde.setTime(fechaDesde);
                dateHasta.setTime(fechaHasta);
                newData = [
                    {
                        'name': 'Propio',
                        'stack': 'Propio',
                        'data': {},
                    },
                    {
                        'name': 'Sector',
                        'stack': 'Sector',
                        'data': {},
                    }
                ];
                auxDate = new Date();
                for (let key in dataAux6[0].data) {
                    auxDate.setDate(key.split("-")[0]);
                    auxDate.setMonth(parseInt(key.split("-")[1])-1);
                    auxDate.setFullYear(key.split("-")[2]);
                    console.log((fechaDesde <= auxDate.getTime()) && (fechaHasta >= auxDate.getTime()));
                    if ((fechaDesde <= auxDate.getTime()) && (fechaHasta >= auxDate.getTime())) {
                        if ((dateDesde.getMonth() == dateHasta.getMonth()) && ((dateDesde.getDate() <= 12) && (dateHasta.getDate() <= 12))) {
                            var keyAux = key.split("-");
                            newData[0].data[keyAux[1]+"-"+keyAux[0]+"-"+keyAux[2]] = dataAux6[0].data[key];
                            newData[1].data[keyAux[1]+"-"+keyAux[0]+"-"+keyAux[2]] = dataAux6[1].data[key];
                        } else {
                            newData[0].data[key] = dataAux6[0].data[key];
                            newData[1].data[key] = dataAux6[1].data[key];
                        }
                    }
                }
                this.setState({
                    data6: newData,
                });
                break;
            case "graph8":
                let dataAux7 = this.state.dataAux7;
                dateDesde.setTime(fechaDesde);
                dateHasta.setTime(fechaHasta);
                monthDesde = dateDesde.getMonth()+1;
                monthHasta = dateHasta.getMonth()+1;
                newData = [
                    {
                        'name': 'Propio',
                        'stack': 'Propio',
                        'data': {},
                    },
                    {
                        'name': 'Sector',
                        'stack': 'Sector',
                        'data': {},
                    }
                ];
                for (var key in dataAux7[0].data) {
                    switch (key.split(" ")[0]) {
                        case "Enero":
                            if ((monthDesde <= 1) && (monthHasta >= 1)) {
                                newData[0].data[key] = dataAux7[0].data[key];
                                newData[1].data[key] = dataAux7[1].data[key];
                            }
                            break;
                        case "Febrero":
                            if ((monthDesde <= 2) && (monthHasta >= 2)) {
                                newData[0].data[key] = dataAux7[0].data[key];
                                newData[1].data[key] = dataAux7[1].data[key];
                            }
                            break;
                        case "Marzo":
                            if ((monthDesde <= 3) && (monthHasta >= 3)) {
                                newData[0].data[key] = dataAux7[0].data[key];
                                newData[1].data[key] = dataAux7[1].data[key];
                            }
                            break;
                        case "Abril":
                            if ((monthDesde <= 4) && (monthHasta >= 4)) {
                                newData[0].data[key] = dataAux7[0].data[key];
                                newData[1].data[key] = dataAux7[1].data[key];
                            }
                            break;
                        case "Mayo":
                            if ((monthDesde <= 5) && (monthHasta >= 5)) {
                                newData[0].data[key] = dataAux7[0].data[key];
                                newData[1].data[key] = dataAux7[1].data[key];
                            }
                            break;
                    }
                }
                this.setState({
                    data7: newData,
                });
                break;
            case "graph9":
                let dataAux8 = this.state.dataAux8;
                dateDesde.setTime(fechaDesde);
                dateHasta.setTime(fechaHasta);
                newData = [
                    {
                        'name': 'Propio',
                        'stack': 'Propio',
                        'data': {},
                    },
                    {
                        'name': 'Sector',
                        'stack': 'Sector',
                        'data': {},
                    }
                ];
                auxDate = new Date();
                for (let key in dataAux8[0].data) {
                    auxDate.setDate(key.split("-")[0]);
                    auxDate.setMonth(key.split("-")[1]-1);
                    auxDate.setFullYear(key.split("-")[2]);
                    console.log((fechaDesde <= auxDate.getTime()) && (fechaHasta >= auxDate.getTime()));
                    if ((fechaDesde <= auxDate.getTime()) && (fechaHasta >= auxDate.getTime())) {
                        if ((dateDesde.getMonth() == dateHasta.getMonth()) && ((dateDesde.getDate() <= 12) && (dateHasta.getDate() <= 12))) {
                            var keyAux = key.split("-");
                            newData[0].data[keyAux[1]+"-"+keyAux[0]+"-"+keyAux[2]] = dataAux8[0].data[key];
                            newData[1].data[keyAux[1]+"-"+keyAux[0]+"-"+keyAux[2]] = dataAux8[1].data[key];
                        } else {
                            newData[0].data[key] = dataAux8[0].data[key];
                            newData[1].data[key] = dataAux8[1].data[key];
                        }
                    }
                }
                this.setState({
                    data8: newData,
                });
                break;
        }
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
                        dataAux1: jsonResponse,
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
                            dataAux5: jsonResponse,
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
                            dataAux6: jsonResponse,
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
                            dataAux7: jsonResponse,
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
                            dataAux8: jsonResponse,
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
                            dataAux1: jsonResponse,
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
                            dataAux2: jsonResponse,
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
                            dataAux3: jsonResponse,
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
                            dataAux4: jsonResponse,
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
                            dataAux5: jsonResponse,
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
                            dataAux6: jsonResponse,
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
                            dataAux7: jsonResponse,
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
                            dataAux8: jsonResponse,
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
            case 9:
                //Gráfica de fidelidad
                var req = new XMLHttpRequest();
                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        let jsonResponse = JSON.parse(req.response);
                        this.setState({
                            dataPie2: jsonResponse,
                        });
                    }
                }.bind(this);
                req.open('GET', 'http://localhost:8080/InubeBackEnd/Graphic10Servlet', true);
                req.setRequestHeader("mid", this.props.userInfo.userMid);
                req.send(null);
                this.setState({
                    section: section,
                });
                break;
        }
    }

    render() {
        let modalPremium = <div>
            <Col md="12">
                <Label>Para ver esta gráfica hay que ser premium</Label>
                <br/>
                <Button color="info" onClick={this.togglemodalPremium}> Quiero ser premium</Button>
                <Modal isOpen={this.state.modalPremium} toggle={this.togglemodalPremium} className='premium'>
                    <ModalHeader toggle={this.togglemodalPremium}> Hazte Premium</ModalHeader>
                    <ModalBody>

                        <p className='text-center'>VENTAJAS DE HACERSE PREMIUM</p>

                        <p>Al hacerte premium tendrás acceso a nuevas gráficas</p>
                        <p className='text-center'> PRECIO</p>

                        <p>por solo 50€/mes</p>


                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.togglemodalPremium}>Me lo voy a pensar</Button>
                        <Button color="success" onClick={this.bePremium}>Hazme Premium</Button>
                    </ModalFooter>
                </Modal>
            </Col>
        </div>;
        let graphSection = <div></div>;
        if (this.state.section === 0) {
            graphSection =
                <div>
                    <Col md="12">
                    <Label> Número de transacciones por mes </Label>
                    <ColumnChart data={this.state.data1} />
                    <br/>
                    <Filter id={"graph1"} onFilter={this.onFilter}/>
                    </Col>
                </div>
        } else if (this.state.section === 1) {
            graphSection =
                <div>
                    <Col md="12">
                    <Label> Número de transacciones por día </Label>
                    <LineChart data={this.state.data2} />
                    <br/>
                    <Filter id={"graph2"} onFilter={this.onFilter}/>
                    </Col>
                </div>
        } else if (this.state.section === 2) {
            graphSection =
                <div>
                    <Col md="12">
                    <Label> Ingresos por mes </Label>
                    <ColumnChart data={this.state.data3} />
                    <br/>
                    <Filter id={"graph3"} onFilter={this.onFilter}/>
                    </Col>
                </div>
        } else if (this.state.section === 3) {
            graphSection =
                <div>
                    <Col md="12">
                    <Label> Ingresos por día </Label>
                    <LineChart data={this.state.data4} />
                    <br/>
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
                                <br/>
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
                graphSection = modalPremium;

            }
        } else if (this.state.section === 6) {
            if (this.props.userInfo.isPremium) {
                graphSection =
                <div>
                    <Label> Comparativa número de transacciones por día </Label>
                    <Row>
                        <Col md="9">
                            <LineChart data={this.state.data6} />
                            <br/>
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
                graphSection = modalPremium;
            }
        } else if (this.state.section === 7) {
            if (this.props.userInfo.isPremium) {
                graphSection =
                    <div>
                        <Label> Comparativa de ingresos por mes </Label>
                        <Row>
                            <Col md="9">
                                <ColumnChart data={this.state.data7} />
                                <br/>
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
                graphSection = modalPremium;
            }
        } else if (this.state.section === 8) {
            if (this.props.userInfo.isPremium) {
                graphSection =
                    <div>
                        <Label> Comparativa de ingresos por día </Label>
                        <Row>
                            <Col md="9">
                                <LineChart data={this.state.data8} />
                                <br/>
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
                graphSection = modalPremium;
            }
        } else if (this.state.section === 9) {
            graphSection =
                <div>
                    <Row>
                        <Label>Comparativa de tipo de cliente</Label>
                        <br/>
                        <PieChart data={this.state.dataPie2.data1} />
                    </Row>
                    <Row>
                        <Label>Comparativa de ingresos por tipo de cliente</Label>
                        <br/>
                        <PieChart data={this.state.dataPie2.data2} />
                    </Row>
                </div>;
        }
        return (
            <div>
                <Container style={{marginLeft: '0px', marginRight: '0px', marginTop: '15px', marginBottom: '15px'}}>
                    <Row>
                        <Col md='3'>
                            <div style={{marginBottom: "20px"}}>
                                <ListGroup>
                                    <ListGroupItem style={{zIndex: '90'}} color="info" active={this.state.section === 0} tag="button" action onClick={() => this.toggleSection(0)}>Número de transacciones por mes</ListGroupItem>
                                    <ListGroupItem style={{zIndex: '90'}} color="info" active={this.state.section === 1} tag="button" action onClick={() => this.toggleSection(1)}>Número de transacciones por día</ListGroupItem>
                                    <ListGroupItem style={{zIndex: '90'}} color="info" active={this.state.section === 2} tag="button" action onClick={() => this.toggleSection(2)}>Ingresos por mes</ListGroupItem>
                                    <ListGroupItem style={{zIndex: '90'}} color="info" active={this.state.section === 3} tag="button" action onClick={() => this.toggleSection(3)}>Ingresos por día</ListGroupItem>
                                    <ListGroupItem style={{zIndex: '90'}} color="info" active={this.state.section === 4} tag="button" action onClick={() => this.toggleSection(4)}>Distribución por servicio de comida</ListGroupItem>
                                    <ListGroupItem style={{zIndex: '90'}} color="info" active={this.state.section === 9} taf="button" action onClick={() => this.toggleSection(9)}>Fidelidad de clientes</ListGroupItem>
                                    <ListGroupItem style={{zIndex: '90'}} color="warning" active={this.state.section === 5} tag="button" action onClick={() => this.toggleSection(5)}>Comparativa número de transacciones por mes</ListGroupItem>
                                    <ListGroupItem style={{zIndex: '90'}} color="warning" active={this.state.section === 6} tag="button" action onClick={() => this.toggleSection(6)}>Comparativa número de transacciones por día</ListGroupItem>
                                    <ListGroupItem style={{zIndex: '90'}} color="warning" active={this.state.section === 7} tag="button" action onClick={() => this.toggleSection(7)}>Comparativa de ingresos por mes</ListGroupItem>
                                    <ListGroupItem style={{zIndex: '90'}} color="warning" active={this.state.section === 8} tag="button" action onClick={() => this.toggleSection(8)}>Comparativa de ingresos por día</ListGroupItem>
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
    }
}

