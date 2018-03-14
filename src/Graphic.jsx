import React from 'react';
import { Button } from 'reactstrap';
import MetricsGraphics from 'react-metrics-graphics';
import 'metrics-graphics/dist/metricsgraphics.css';
var FontAwesome = require('react-fontawesome');

export default class Graphic extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <MetricsGraphics
                    title="Downloads"
                    description="This graphic shows a time-series of downloads. Cosas"
                    data={ [{'date':new Date('2014-10-01'),'value':12},{'date':new Date('2015-10-01'),'value':-2}, {'date':new Date('2016-11-02'),'value':18}] }
                    width={600}
                    height={250}
                    x_accessor="date"
                    y_accessor="value"
                />

            </div>
        );

    }
}

