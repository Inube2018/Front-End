import React from 'react';
import { Button } from 'reactstrap';
let FontAwesome = require('react-fontawesome');

export default class Filter extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            activeTab: '0',
            arrow: 'arrow-right',
            compress_filter: '0'
        };
        this.toggleTab = this.toggleTab.bind(this);
    }

    onPress = () => {

        if(this.state.compress_filter == '0'){
            this.setState({
                arrow: 'arrow-down',
                compress_filter: '1'
            });
            document.getElementById('pruebas').style.display = 'none';

        }else{
            this.setState({
                arrow: 'arrow-right',
                compress_filter: '0'
            });
            document.getElementById('pruebas').style.display = 'block';
        }

    }
    render() {
        if (!this.state.isLogged) {
            return (
                <div>
                    <Button color="primary" size="lg" className='filter' onClick={this.onPress}><FontAwesome name='filter'/> Filtro <FontAwesome name={this.state.arrow}/></Button>
                    <p id='pruebas' >PENE</p>
                </div>
            );
        }
    }

    toggleTab(tab) {
        this.props.toggleTab(tab);
        console.log(this.props)
    }
}

