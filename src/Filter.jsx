import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Button, Row, Col } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
let FontAwesome = require('react-fontawesome');



export default class Filter extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            arrow: 'arrow-right',
            compress_filter: '0',
            startDateMin: null,
            startDateMax: null
        };
        this.handleMin = this.handleMin.bind(this);
        this.handleMax = this.handleMax.bind(this);
        this.onFilter = this.onFilter.bind(this);


    }

    componentDidMount() {
        //switch (this.props.id) {
        //    case "graph1":
                if ((this.state.startDateMax !== null) || (this.state.startDateMin !== null)) {
                    this.setState({
                        startDateMin: null,
                        startDateMax: null,
                    });
                }
        //        break;
        //     case "graph2":
        //         this.setState({
        //             startDateMin: moment(),
        //             startDateMax: moment(),
        //         });
        //         break;
        //     case "graph3":
        //         this.setState({
        //             startDateMin: moment(new Date().setDate(1)),
        //             startDateMax: moment(new Date().setDate(1)),
        //         });
        //         break;
        //     case "graph4":
        //         this.setState({
        //             startDateMin: moment(),
        //             startDateMax: moment(),
        //         });
        //         break;
        //     case "graph5":
        //         this.setState({
        //             startDateMin: moment(),
        //             startDateMax: moment(),
        //         });
        //         break;
        //     case "graph6":
        //         this.setState({
        //             startDateMin: moment(new Date().setDate(1)),
        //             startDateMax: moment(new Date().setDate(1)),
        //         });
        //         break;
        //     case "graph7":
        //         this.setState({
        //             startDateMin: moment(),
        //             startDateMax: moment(),
        //         });
        //         break;
        //     case "graph8":
        //         this.setState({
        //             startDateMin: moment(new Date().setDate(1)),
        //             startDateMax: moment(new Date().setDate(1)),
        //         });
        //         break;
        //     case "graph9":
        //         this.setState({
        //             startDateMin: moment(),
        //             startDateMax: moment(),
        //         });
        //         break;
        // }
        document.getElementById(this.props.id).style.display = 'none';
    }

    handleMin(date) {
        this.setState({
            startDateMin: date
        });
    }
    handleMax(date) {
        this.setState({
            startDateMax: date
        });
    }

    onPress = () => {

        if (this.state.compress_filter == '0') {
            this.setState({
                arrow: 'arrow-down',
                compress_filter: '1'
            });
            document.getElementById(this.props.id).style.display = 'block';

        } else {
            this.setState({
                arrow: 'arrow-right',
                compress_filter: '0',
                startDateMax: null,
                startDateMin: null,
            });
            document.getElementById(this.props.id).style.display = 'none';
        }
    }

    onFilter() {
        //Aquí pillas fecha máx y fecha min
        var fechaDesde = Date.parse(this.state.startDateMin === null ? moment() : this.state.startDateMin);
        var fechaHasta = Date.parse(this.state.startDateMax === null ? moment() : this.state.startDateMax);
        this.props.onFilter(fechaDesde, fechaHasta, this.props.id);

        //for (var key in data) {
        //    console.log("key " + key + " has value " + data[key]);
        //}
    }

    render() {
        let filtro = <div></div>;
        if (this.props.id === "graph1") { //MES
            filtro = <div>
                <Button color="info" size="lg" className='filter' onClick={this.onPress}>
                    <FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/>
                </Button>
                <div id={this.props.id}>
                    <Row>
                        <Col md='6'>
                            <DatePicker includeDates={[moment(new Date("January 1, 2018")), moment(new Date("February 1, 2018")), moment(new Date("March 1, 2018")), moment(new Date("April 1, 2018")), moment(new Date("May 1, 2018")), moment(new Date("June 1, 2018")), moment(new Date("July 1, 2018")), moment(new Date("August 1, 2018")), moment(new Date("September 1, 2018")), moment(new Date("October 1, 2018")), moment(new Date("November 1, 2018")), moment(new Date("December 1, 2018"))]} dateFormat="DD/MM/YYYY" selected={this.state.startDateMin === null ? moment(new Date().setDate(1)) : this.state.startDateMin}  onChange={this.handleMin} />
                        </Col>
                        <Col md='6'>
                            <DatePicker includeDates={[moment(new Date("January 1, 2018")), moment(new Date("February 1, 2018")), moment(new Date("March 1, 2018")), moment(new Date("April 1, 2018")), moment(new Date("May 1, 2018")), moment(new Date("June 1, 2018")), moment(new Date("July 1, 2018")), moment(new Date("August 1, 2018")), moment(new Date("September 1, 2018")), moment(new Date("October 1, 2018")), moment(new Date("November 1, 2018")), moment(new Date("December 1, 2018"))]} dateFormat="DD/MM/YYYY" selected={this.state.startDateMax === null ? moment(new Date().setDate(1)) : this.state.startDateMax}  onChange={this.handleMax} />
                        </Col>
                    </Row>
                    <Button color="info" size="lg" className='filter' onClick={this.onFilter}>Filtrar</Button>
                </div>
            </div>;
        } else if (this.props.id === "graph2") { //DIA
            filtro = <div>
                <Button color="info" size="lg" className='filter' onClick={this.onPress}>
                    <FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/>
                </Button>
                <div id={this.props.id}>
                    <Row>
                        <Col md='6'>
                            <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.startDateMin === null ? moment() : this.state.startDateMin}  onChange={this.handleMin} />
                        </Col>
                        <Col md='6'>
                            <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.startDateMax === null ? moment() : this.state.startDateMax}  onChange={this.handleMax} />
                        </Col>
                    </Row>
                    <Button color="info" size="lg" className='filter' onClick={this.onFilter}>Filtrar</Button>
                </div>
            </div>;
        } else if (this.props.id === "graph3") { //MES
            filtro = <div>
                <Button color="info" size="lg" className='filter' onClick={this.onPress}>
                    <FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/>
                </Button>
                <div id={this.props.id}>
                    <Row>
                        <Col md='6'>
                            <DatePicker includeDates={[moment(new Date("January 1, 2018")), moment(new Date("February 1, 2018")), moment(new Date("March 1, 2018")), moment(new Date("April 1, 2018")), moment(new Date("May 1, 2018")), moment(new Date("June 1, 2018")), moment(new Date("July 1, 2018")), moment(new Date("August 1, 2018")), moment(new Date("September 1, 2018")), moment(new Date("October 1, 2018")), moment(new Date("November 1, 2018")), moment(new Date("December 1, 2018"))]} dateFormat="DD/MM/YYYY" selected={this.state.startDateMin === null ? moment(new Date().setDate(1)) : this.state.startDateMin}  onChange={this.handleMin} />
                        </Col>
                        <Col md='6'>
                            <DatePicker includeDates={[moment(new Date("January 1, 2018")), moment(new Date("February 1, 2018")), moment(new Date("March 1, 2018")), moment(new Date("April 1, 2018")), moment(new Date("May 1, 2018")), moment(new Date("June 1, 2018")), moment(new Date("July 1, 2018")), moment(new Date("August 1, 2018")), moment(new Date("September 1, 2018")), moment(new Date("October 1, 2018")), moment(new Date("November 1, 2018")), moment(new Date("December 1, 2018"))]} dateFormat="DD/MM/YYYY" selected={this.state.startDateMax === null ? moment(new Date().setDate(1)) : this.state.startDateMax}  onChange={this.handleMax} />
                        </Col>
                    </Row>
                    <Button color="info" size="lg" className='filter' onClick={this.onFilter}>Filtrar</Button>
                </div>
            </div>;
        } else if (this.props.id === "graph4") { //DIA
            filtro = <div>
                <Button color="info" size="lg" className='filter' onClick={this.onPress}>
                    <FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/>
                </Button>
                <div id={this.props.id}>
                    <Row>
                        <Col md='6'>
                            <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.startDateMin === null ? moment() : this.state.startDateMin}  onChange={this.handleMin} />
                        </Col>
                        <Col md='6'>
                            <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.startDateMax === null ? moment() : this.state.startDateMax}  onChange={this.handleMax} />
                        </Col>
                    </Row>
                    <Button color="info" size="lg" className='filter' onClick={this.onFilter}>Filtrar</Button>
                </div>
            </div>;
        } else if (this.props.id === "graph5") { //TURNOS
            filtro = <div>
                <Button color="info" size="lg" className='filter' onClick={this.onPress}>
                    <FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/>
                </Button>
                <div id={this.props.id}>
                    <Row>
                        <Col md='6'>
                            <DatePicker includeDates={[moment(new Date("January 1, 2018")), moment(new Date("February 1, 2018")), moment(new Date("March 1, 2018")), moment(new Date("April 1, 2018")), moment(new Date("May 1, 2018")), moment(new Date("June 1, 2018")), moment(new Date("July 1, 2018")), moment(new Date("August 1, 2018")), moment(new Date("September 1, 2018")), moment(new Date("October 1, 2018")), moment(new Date("November 1, 2018")), moment(new Date("December 1, 2018"))]} dateFormat="DD/MM/YYYY" selected={this.state.startDateMin === null ? moment(new Date().setDate(1)) : this.state.startDateMin}  onChange={this.handleMin} />
                        </Col>
                        <Col md='6'>
                            <DatePicker includeDates={[moment(new Date("January 1, 2018")), moment(new Date("February 1, 2018")), moment(new Date("March 1, 2018")), moment(new Date("April 1, 2018")), moment(new Date("May 1, 2018")), moment(new Date("June 1, 2018")), moment(new Date("July 1, 2018")), moment(new Date("August 1, 2018")), moment(new Date("September 1, 2018")), moment(new Date("October 1, 2018")), moment(new Date("November 1, 2018")), moment(new Date("December 1, 2018"))]} dateFormat="DD/MM/YYYY" selected={this.state.startDateMax === null ? moment(new Date().setDate(1)) : this.state.startDateMax}  onChange={this.handleMax} />
                        </Col>
                    </Row>
                    <Button color="info" size="lg" className='filter' onClick={this.onFilter}>Filtrar</Button>
                </div>
            </div>;
        } else if (this.props.id === "graph6") { //MES
            filtro = <div>
                <Button color="info" size="lg" className='filter' onClick={this.onPress}>
                    <FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/>
                </Button>
                <div id={this.props.id}>
                    <Row>
                        <Col md='6'>
                            <DatePicker includeDates={[moment(new Date("January 1, 2018")), moment(new Date("February 1, 2018")), moment(new Date("March 1, 2018")), moment(new Date("April 1, 2018")), moment(new Date("May 1, 2018")), moment(new Date("June 1, 2018")), moment(new Date("July 1, 2018")), moment(new Date("August 1, 2018")), moment(new Date("September 1, 2018")), moment(new Date("October 1, 2018")), moment(new Date("November 1, 2018")), moment(new Date("December 1, 2018"))]} dateFormat="DD/MM/YYYY" selected={this.state.startDateMin === null ? moment(new Date().setDate(1)) : this.state.startDateMin}  onChange={this.handleMin} />
                        </Col>
                        <Col md='6'>
                            <DatePicker includeDates={[moment(new Date("January 1, 2018")), moment(new Date("February 1, 2018")), moment(new Date("March 1, 2018")), moment(new Date("April 1, 2018")), moment(new Date("May 1, 2018")), moment(new Date("June 1, 2018")), moment(new Date("July 1, 2018")), moment(new Date("August 1, 2018")), moment(new Date("September 1, 2018")), moment(new Date("October 1, 2018")), moment(new Date("November 1, 2018")), moment(new Date("December 1, 2018"))]} dateFormat="DD/MM/YYYY" selected={this.state.startDateMax === null ? moment(new Date().setDate(1)) : this.state.startDateMax}  onChange={this.handleMax} />
                        </Col>
                    </Row>
                    <Button color="info" size="lg" className='filter' onClick={this.onFilter}>Filtrar</Button>
                </div>
            </div>;
        } else if (this.props.id === "graph7") { //DIA
            filtro = <div>
                <Button color="info" size="lg" className='filter' onClick={this.onPress}>
                    <FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/>
                </Button>
                <div id={this.props.id}>
                    <Row>
                        <Col md='6'>
                            <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.startDateMin === null ? moment() : this.state.startDateMin}  onChange={this.handleMin} />
                        </Col>
                        <Col md='6'>
                            <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.startDateMax === null ? moment() : this.state.startDateMax}  onChange={this.handleMax} />
                        </Col>
                    </Row>
                    <Button color="info" size="lg" className='filter' onClick={this.onFilter}>Filtrar</Button>
                </div>
            </div>;
        } else if (this.props.id === "graph8") { //MES
            filtro = <div>
                <Button color="info" size="lg" className='filter' onClick={this.onPress}>
                    <FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/>
                </Button>
                <div id={this.props.id}>
                    <Row>
                        <Col md='6'>
                            <DatePicker includeDates={[moment(new Date("January 1, 2018")), moment(new Date("February 1, 2018")), moment(new Date("March 1, 2018")), moment(new Date("April 1, 2018")), moment(new Date("May 1, 2018")), moment(new Date("June 1, 2018")), moment(new Date("July 1, 2018")), moment(new Date("August 1, 2018")), moment(new Date("September 1, 2018")), moment(new Date("October 1, 2018")), moment(new Date("November 1, 2018")), moment(new Date("December 1, 2018"))]} dateFormat="DD/MM/YYYY" selected={this.state.startDateMin === null ? moment(new Date().setDate(1)) : this.state.startDateMin}  onChange={this.handleMin} />
                        </Col>
                        <Col md='6'>
                            <DatePicker includeDates={[moment(new Date("January 1, 2018")), moment(new Date("February 1, 2018")), moment(new Date("March 1, 2018")), moment(new Date("April 1, 2018")), moment(new Date("May 1, 2018")), moment(new Date("June 1, 2018")), moment(new Date("July 1, 2018")), moment(new Date("August 1, 2018")), moment(new Date("September 1, 2018")), moment(new Date("October 1, 2018")), moment(new Date("November 1, 2018")), moment(new Date("December 1, 2018"))]} dateFormat="DD/MM/YYYY" selected={this.state.startDateMax === null ? moment(new Date().setDate(1)) : this.state.startDateMax}  onChange={this.handleMax} />
                        </Col>
                    </Row>
                    <Button color="info" size="lg" className='filter' onClick={this.onFilter}>Filtrar</Button>
                </div>
            </div>;
        } else if (this.props.id === "graph9") { //DIA
            filtro = <div>
                <Button color="info" size="lg" className='filter' onClick={this.onPress}>
                    <FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/>
                </Button>
                <div id={this.props.id}>
                    <Row>
                        <Col md='6'>
                            <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.startDateMin === null ? moment() : this.state.startDateMin}  onChange={this.handleMin} />
                        </Col>
                        <Col md='6'>
                            <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.startDateMax === null ? moment() : this.state.startDateMax}  onChange={this.handleMax} />
                        </Col>
                    </Row>
                    <Button color="info" size="lg" className='filter' onClick={this.onFilter}>Filtrar</Button>
                </div>
            </div>;
        }
        return (
            <div>
                {filtro}
            </div>
        );
    }

}

