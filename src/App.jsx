import React from 'react';
import Navigator from './Navigator.jsx';
import Footer from './Footer.jsx';
import './assets/main.scss';
var FontAwesome = require('react-fontawesome');


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
            logInFailed: false,
            editStep: 0,
        };
        this.toggleTab = this.toggleTab.bind(this);
        this.logInHandler = this.logInHandler.bind(this);
        this.stepHandler = this.stepHandler.bind(this);
        this.stepEditHandler = this.stepEditHandler.bind(this);
        this.stepEditSaltarHandler = this.stepEditSaltarHandler.bind(this);
        this.logOutHandler = this.logOutHandler.bind(this);
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                <h1 className="text-info" style={{textAlign: 'center', marginTop: '1%'}}><FontAwesome name='cloud' /> iNube</h1>
                <Navigator logOutHandler={this.logOutHandler} isLogged={this.state.isLogged} logInFailed={this.state.logInFailed} toggleTab={this.toggleTab} logInHandler={this.logInHandler} stepHandler={this.stepHandler} registrationStep={this.state.registrationStep} editStep={this.state.editStep} stepEditHandler={this.stepEditHandler} stepEditSaltarHandler={this.stepEditSaltarHandler} activeTab={this.state.activeTab}/>
                <Footer/>
            </div>
        );
    }

    logOutHandler(logOut) {
        if (logOut) {
            this.setState({
                isLogged: false,
                activeTab: '0',
                registrationStep: 0
            });
        } else {
            this.setState({
                activeTab: '0'
            })
        }
    }

    toggleTab(tab) {
        console.log(this.state);
        this.setState({
            activeTab: tab
        });
    }

    logInHandler(email, password) {
        if ((email === "admin") && (password === "1234")) {
            this.setState({
                isLogged: !this.state.isLogged,
                logInFailed: false,
                activeTab: '0',
            });
        } else {
            this.setState({
                logInFailed: true,
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
                    isLogged: true,
                    activeTab: '0',
                });
            }
        } else {
            this.setState({
                registrationStep: this.state.registrationStep-1,
            });
            // Mandar datos de registro ANTES DE ACTUALIZAR EL ESTADO?
        }
    }

    stepEditHandler(direction, editData) {
        if (direction === 0) {
            console.log(editData);
            if (this.state.editStep === 0) {
                this.setState({
                    editStep: this.state.editStep+1,
                    editUserName: editData[0],
                    editEmail: editData[1],
                    editPassword: editData[2],
                });
            } else if (this.state.editStep === 1) {
                this.setState({
                    editStep: this.state.editStep+1,
                    editRestaurantName: editData[0],
                    editZipCode: editData[1],
                    editBusinessType: editData[2],
                    editAverageSell: editData[2],
                });
            } else if (this.state.editStep === 2) {
                this.setState({
                    editStep: 0,
                    editIban: editData[0],
                    isLogged: true,
                    activeTab: '0'
                });
            }

        }
           else {
            this.setState({
                editStep: this.state.editStep-1,
            });

        }

    }

    stepEditSaltarHandler(direction, editData2) {
        if (direction === 0) {
            console.log(editData2);
            if (this.state.editStep === 0) {
                this.setState({
                    editStep: this.state.editStep+1,

                });
            } else if (this.state.editStep === 1) {
                this.setState({
                    editStep: this.state.editStep+1,

                });
            } else if (this.state.editStep === 2) {
                this.setState({
                    editStep: 0,
                    isLogged: true,
                    activeTab: '0'
                });
            }

        }
           else {
            this.setState({
                editStep: this.state.editStep-1,
            });

        }

    }

}
export default App;
