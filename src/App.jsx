import React from 'react';
import Navigator from './Navigator.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: false, 
            activeTab: '0',
            registrationStep: 0,
            regUserName: '',
            regEmail: '',
            regPassword: '',
            regRestaurantName: '',
            regZipCode: '',
            regBusinessType: '',
            regAverageSell: '',
            regIban: '',
        };
        this.toggleTab = this.toggleTab.bind(this);
        this.logInHandler = this.logInHandler.bind(this);
        this.stepHandler = this.stepHandler.bind(this);
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                <h1 className="text-info" style={{textAlign: 'center', marginTop: '2%'}}>iNube</h1>
                <Navigator isLogged={this.state.isLogged} toggleTab={this.toggleTab} logInHandler={this.logInHandler} stepHandler={this.stepHandler} registrationStep={this.state.registrationStep} activeTab={this.state.activeTab}/>
            </div>
        );        
    }

    toggleTab(tab) {
        this.setState({
            activeTab: tab
        });
    }

    logInHandler(email, password) {
        if ((email === "admin") && (password === "1234")) {
            this.setState({
                isLogged: !this.state.isLogged,
            });
        }
    }

    stepHandler(direction, regData) {
        // direction === 0 si se avanza
        if (direction === 0) {
            console.log(regData);
            if (this.state.registrationStep === 0) {
                this.setState({
                    registrationStep: this.state.registrationStep+1,
                    regUserName: regData[0],
                    regEmail: regData[1],
                    regPassword: regData[2],
                });  
            } else if (this.state.registrationStep === 1) {
                this.setState({
                    registrationStep: this.state.registrationStep+1,
                    regRestaurantName: regData[0],
                    regZipCode: regData[1],
                    regBusinessType: regData[2],
                    regAverageSell: regData[2],
                });
            } else if (this.state.registrationStep === 2) {
                this.setState({
                    registrationStep: 0,
                    regIban: regData[0],
                });
            }
        } else {
            this.setState({
                registrationStep: this.state.registrationStep-1,
            });
            // Mandar datos de registro ANTES DE ACTUALIZAR EL ESTADO?
        }
    }

}
export default App;
