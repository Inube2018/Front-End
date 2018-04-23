import React from 'react';
import { Button } from 'reactstrap';
let FontAwesome = require('react-fontawesome');

export default class Filter extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            arrow: 'arrow-right',
            compress_filter: '0',
            graphic: 'line-chart '
        };
    }

    onPress = () => {

        if(this.state.compress_filter == '0'){
            this.setState({
                arrow: 'arrow-down',
                compress_filter: '1',
                graphic: 'area-chart'
            });
            document.getElementById('botones-graficos').style.display = 'block';

        }else{
            this.setState({
                arrow: 'arrow-right',
                compress_filter: '0',
                graphic:'bar-chart'
            });
            document.getElementById('botones-graficos').style.display = 'none';
        }

    }
    render() {
        if (!this.state.isLogged) {
            return (
                <div className='tipos-grafica'>
                    <Button color="primary" size="lg" className='filter' onClick={this.onPress}>
                        <FontAwesome name={this.state.graphic}/> Tipos de gráficos <FontAwesome name={this.state.arrow}/>
                    </Button>
                    <div id='botones-graficos'>EN CONSTRUCCION</div>
                </div>
            );
        }
    }

}

