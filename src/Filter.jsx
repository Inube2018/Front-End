import React from 'react';
import { Button } from 'reactstrap';
let FontAwesome = require('react-fontawesome');

export default class Filter extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            arrow: 'arrow-right',
            compress_filter: '0'
        };

    }

    onPress = () => {

        if(this.state.compress_filter == '0'){
            this.setState({
                arrow: 'arrow-down',
                compress_filter: '1'
            });
            document.getElementById('pruebas').style.display = 'block';

        }else{
            this.setState({
                arrow: 'arrow-right',
                compress_filter: '0'
            });
            document.getElementById('pruebas').style.display = 'none';
        }

    }
    render() {
        if (!this.state.isLogged) {
            return (
                <div>
                    <Button color="primary" size="lg" className='filter' onClick={this.onPress}><FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/></Button>
                    <div id='pruebas'><p>Aquí va el filtro</p></div>
                </div>
            );
        }
    }

}

