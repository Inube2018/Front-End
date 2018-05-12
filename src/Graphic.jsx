import React from 'react';
import { Button } from 'reactstrap';
import MetricsGraphics from 'react-metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';
import Filter from "./Filter.jsx";
var FontAwesome = require('react-fontawesome');

export default class Graphic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            random: 0,
            data: [
                {
                    'date': new Date(),
                    'value': 350
                },
                {
                    'date': new Date(),
                    'value': 350
                },
                {
                    'date': new Date(),
                    'value': 350
                },
                {
                    'date': new Date(),
                    'value': 350
                },
                {
                    'date': new Date(),
                    'value': 350
                }
            ],
            dataAux: [],
            title:[
                'Downloads',
                'Selling',
                'Amount',
                'Prices',
                'Drafts',
                'Clients',
                'Invoice'
            ],
            description:[
                'Loren Ipsum',
                'Loren Ipsum',
                'Loren Ipsum',
                'Loren Ipsum'
            ]
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.onFilter = this.onFilter.bind(this);
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
        let req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                console.log(JSON.parse(req.response));
                let jsonResponse = JSON.parse(req.response);
                let data = [];
                for (let i = 0; i < jsonResponse.length; i++) {
                    data.push({'date': new Date(jsonResponse[i].date), 'value': jsonResponse[i].quantity});
                }
                console.log(data);
                this.setState({
                    data: data,
                    dataAux: JSON.parse(req.response),
                });
            }
        }.bind(this);
        req.open('GET', 'http://localhost:8080/InubeBackEnd/GraphicServlet', true);
        console.log(this.props.userInfo.userId);
        //req.setRequestHeader('userId', this.state.userInfo.userId);
        req.setRequestHeader('userId', this.props.userInfo.userId);
        req.send(null);
    }



    render() {

        return (
            <div>
                <MetricsGraphics
                    title={this.state.title[Math.floor(Math.random()*this.state.title.length)]}
                    description={this.state.description[Math.floor(Math.random()*this.state.description.length)]}
                    data={this.state.data}
                    width={480}
                    height={250}
                    max_y={800}
                    x_accessor='date'
                    y_accessor='value'
                    chart_type='point'
                    area={false}
                />
                <Filter id={this.props.id} onFilter={this.onFilter}/>

            </div>
        );

    }
}

