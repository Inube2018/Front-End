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
            title:[
                'Downloads',
                'Selling',
                'Amount',
                'prices'
            ],
            description:[
                'Loren Ipsum',
                'Loren Ipsum',
                'Loren Ipsum',
                'Loren Ipsum'
            ],
            data:[
                [
                    'date'  : '2014-10-01',
                    'value' : 40
                ],
                [
                    'date'  : '2014-12-01',
                    'value' : 20
            ],
                [
                    'date'  : '2013-10-01',
                    'value' : 2
            ],
                [
                    'date'  : '2014-10-34',
                    'value' : 13
            ],
                [
                    'date'  : '2017-10-01',
                    'value' : 40
            ],
                [
                    'date'  : '2014-01-01',
                    'value' : 423
            ],
                [
                    'date'  : '1994-01-09',
                    'value' : 19
            ],
                [
                    'date'  : '2015-10-01',
                    'value' : 23
            ],
                [
                    'date'  : '2016-10-01',
                    'value' : 34
            ],
                [
                    'date'  : '2018-10-01',
                    'value' : 56
            ]
        ]
    }
}


    render() {
        return (
            <div>
                <MetricsGraphics
                    title='Downloads'
                    description='Loren Ipsum'
                    data={ [{'date':new Date('2012-11-02'),'value':22},{'date':new Date('2015-10-01'),'value':-2}, {'date':new Date('2016-11-02'),'value':18}] }
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

