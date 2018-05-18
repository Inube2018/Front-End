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
            startDateMin: moment(),
            startDateMax: moment()
        };
        this.handleLogMin = this.handleLogMin.bind(this);
        this.handleLogMax = this.handleLogMax.bind(this);
        this.onFilter = this.onFilter.bind(this);


    }

    componentDidMount() {
        document.getElementById(this.props.id).style.display = 'none';
    }
    handleLogMin(date) {
        this.setState({
            startDateMin: date
        });
    }
    handleLogMax(date) {
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
                compress_filter: '0'
            });
            document.getElementById(this.props.id).style.display = 'none';
        }
    }

    onFilter() {
        //Aquí pillas fecha máx y fecha min
        var fechaDesde = Date.parse(this.state.startDateMin);
        var fechaHasta = Date.parse(this.state.startDateMax);
        this.props.onFilter(fechaDesde, fechaHasta);

        //for (var key in data) {
        //    console.log("key " + key + " has value " + data[key]);
        //}
    }

    render() {
        if (!this.state.isLogged) {
            return (
                <div>
                    <Button color="info" size="lg" className='filter' onClick={this.onPress}>
                        <FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/>
                    </Button>
                    <div id={this.props.id}>
                        <Row>
                            <Col md='6'>
                                <DatePicker selected={this.state.startDateMin}  onChange={this.handleLogMin} />
                            </Col>
                            <Col md='6'>
                                <DatePicker selected={this.state.startDateMax}  onChange={this.handleLogMax} />
                            </Col>
                        </Row>
                        <Button color="info" size="lg" className='filter' onClick={this.onFilter}>Filtrar</Button>
                    </div>
                </div>
            );
        }
    }

}

