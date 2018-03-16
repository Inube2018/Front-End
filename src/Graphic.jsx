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
            title:[
                'Downloads',
                'Selling',
                'Amount',
                'prices',
                'drafts',
                'clients',
                'invoice'
            ],
            description:[
                'Loren Ipsum',
                'Loren Ipsum',
                'Loren Ipsum',
                'Loren Ipsum'
            ],
            date:[
                '2011-11-02',
                '2011-12-02',
                '2012-01-02',
                '2012-02-02',
                '2012-03-02',
                '2012-04-02',
                '2012-05-02',
                '2012-06-02',
                '2012-07-02',
                '2012-08-02',
                '2012-09-02',
                '2012-10-02',
                '2012-11-02',
                '2012-12-02',
                '2013-01-02',
                '2013-02-02',
                '2013-03-02',
                '2013-04-02',
                '2013-05-02',
                '2013-06-02',
                '2013-07-02',
                '2013-08-02',
                '2013-09-02',
                '2013-10-02',
                '2013-11-02',
                '2013-12-02'
            ],
            value:[
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20',
                '21',
                '22',
                '23',
                '24',
                '25',
                '26',
                '27',
                '28'

            ]

        }
    }



    render() {

        return (
            <div>
                <MetricsGraphics
                    title={this.state.title[Math.floor(Math.random()*this.state.title.length)]}
                    description={this.state.description[Math.floor(Math.random()*this.state.description.length)]}
                    data={ [{'date':new Date(this.state.date[Math.floor(Math.random()*this.state.date.length)]),'value':this.state.value[Math.floor(Math.random()*this.state.value.length)]},{'date':new Date(this.state.date[Math.floor(Math.random()*this.state.date.length)]),'value':this.state.value[Math.floor(Math.random()*this.state.value.length)]}, {'date':new Date(this.state.date[Math.floor(Math.random()*this.state.date.length)]),'value':this.state.value[Math.floor(Math.random()*this.state.value.length)]},{'date':new Date(this.state.date[Math.floor(Math.random()*this.state.date.length)]),'value':this.state.value[Math.floor(Math.random()*this.state.value.length)]},{'date':new Date(this.state.date[Math.floor(Math.random()*this.state.date.length)]),'value':this.state.value[Math.floor(Math.random()*this.state.value.length)]},{'date':new Date(this.state.date[Math.floor(Math.random()*this.state.date.length)]),'value':this.state.value[Math.floor(Math.random()*this.state.value.length)]},{'date':new Date(this.state.date[Math.floor(Math.random()*this.state.date.length)]),'value':this.state.value[Math.floor(Math.random()*this.state.value.length)]},{'date':new Date(this.state.date[Math.floor(Math.random()*this.state.date.length)]),'value':this.state.value[Math.floor(Math.random()*this.state.value.length)]}] }
                    width={480}
                    height={250}
                    x_accessor="date"
                    y_accessor="value"
                />
                <Filter/>

            </div>
        );

    }
}

